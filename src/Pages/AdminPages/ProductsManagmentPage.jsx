import React from "react";
import Sidebar from "../../Components/Admin/Sidebar";
import Pagination from "../../Components/Utility/Pagination";
import ProductsManagmentContainer from "../../Components/Admin/ProductsManagmentContainer";
function ProductsManagmentPage() {
  return (
    <div className="Admin" style={{ minHeight: "calc(100vh - 72px - 57px)" }}>
      <div className="container m-auto p-4 xl:px-36">
        <div className="sm:grid grid-cols-4 lg:grid-cols-6  gap-4 relative">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-3 lg:col-span-5">
            <ProductsManagmentContainer />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsManagmentPage;
