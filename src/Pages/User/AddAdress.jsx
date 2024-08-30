import React from "react";
import UserSidebar from "../../Components/User/UserSidebar";
import AddAdressContainer from "../../Components/User/AddAdressContainer";

function AddAdress() {
  return (
    <div className="Admin" style={{ minHeight: "calc(100vh - 72px - 57px)" }}>
      <div className="container m-auto p-4 xl:px-36">
        <div className="sm:grid grid-cols-4 lg:grid-cols-6 gap-4 relative">
          <div className="col-span-1">
            <UserSidebar />
          </div>
          <div className="col-span-3 lg:col-span-5">
            <AddAdressContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAdress;