import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import AddCouponContainer from "./AddCouponContainer";
import { ToastContainer } from "react-toastify";
import GetAllCouponHook from "../../Custom Hooks/coupon/GetAllCouponHook";
import CouponCard from "./CouponCard";
import DeleteCouponHook from "../../Custom Hooks/coupon/DeleteCouponHook";
import ModalDelete from "../Utility/ModalDelete";
function CouponManagmentContainer() {
  const [items, convertDate] = GetAllCouponHook();
  const [onClickDelete, modalMoodDelete, closeModalDelete, onAcceptanceDelete, msgDelete] = DeleteCouponHook();

  return (
    <div>
      <SubTitle title={"إدارة جميع الكوبونات"} />
      <div className="max-w-3xl min-h-80">
        <AddCouponContainer />
        {
          items && items.map((item, i) => <CouponCard key={i} itemID={item._id} title={item.name} date={convertDate(item.expire)} discount={item.discount} onClickDelete={onClickDelete} />)
        }
      </div>

      <ToastContainer />
      <ModalDelete modalMoodDelete={modalMoodDelete} closeModalDelete={closeModalDelete} onAcceptanceDelete={onAcceptanceDelete} msgDelete={msgDelete} />

    </div>
  );
}

export default CouponManagmentContainer;
