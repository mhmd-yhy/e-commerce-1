import React from "react";
import Sidebar from "../../Components/Admin/Sidebar";
import EditProductContainer from "../../Components/Admin/EditProductContainer";
function EditProductPage() {
  return (
    <div className="Admin" style={{ minHeight: "calc(100vh - 72px - 50px)" }}>
      <div className="container m-auto p-4 xl:px-36">
        <div className="sm:grid grid-cols-4 lg:grid-cols-6  gap-4 relative">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-3 lg:col-span-5">
            <EditProductContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProductPage;
