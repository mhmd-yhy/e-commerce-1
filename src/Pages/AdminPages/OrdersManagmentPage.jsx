import React from "react";
import Sidebar from "../../Components/Admin/Sidebar";
import Pagination from "../../Components/Utility/Pagination";
import OrderManagmentContainer from "../../Components/Admin/OrderManagmentContainer";
function OrdersManagmentPage() {
  return (
    <div className="Admin" style={{ minHeight: "calc(100vh - 72px - 50px)" }}>
      <div className="container m-auto p-4 xl:px-36">
        <div className="sm:grid grid-cols-4 lg:grid-cols-6  gap-4 relative">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-3 lg:col-span-5">
            <OrderManagmentContainer />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersManagmentPage;
