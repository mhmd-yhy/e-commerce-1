import React from "react";
import UserSidebar from "../../Components/User/UserSidebar";
import ProfilContainer from "../../Components/User/ProfilContainer";
import { ToastContainer } from "react-toastify";
function Profil() {
  return (
    <div className="Admin" style={{ minHeight: "calc(100vh - 72px - 57px)" }}>
      <ToastContainer />
      <div className="container m-auto p-4 xl:px-36">
        <div className="sm:grid grid-cols-4 lg:grid-cols-6  gap-4 relative">
          <div className="col-span-1">
            <UserSidebar />
          </div>
          <div className="col-span-3 lg:col-span-5">
            <ProfilContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
