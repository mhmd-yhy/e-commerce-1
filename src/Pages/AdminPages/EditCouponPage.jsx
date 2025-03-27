import React, { useEffect } from "react";
import Sidebar from "../../Components/Admin/Sidebar";
import EditCouponContainer from "../../Components/Admin/EditCouponContainer";
import InternetConnectionHook from "../../Custom Hooks/internet/InternetConnectionHook";
function EditCouponPage() {
  const [checkInternet] = InternetConnectionHook();
  useEffect(() => { checkInternet(); }, []);
  return (
    <div className="Admin" style={{ minHeight: "calc(100vh - 72px - 50px)" }}>
      <div className="container m-auto p-4 xl:px-36">
        <div className="sm:grid grid-cols-4 lg:grid-cols-6  gap-4 relative">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-3 lg:col-span-5">
            <EditCouponContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCouponPage;
