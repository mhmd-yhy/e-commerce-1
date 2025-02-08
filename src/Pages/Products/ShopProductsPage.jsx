import React from "react";
import NavCategory from "../../Components/Category/NavCategory";
import SearchCountResult from "../../Components/Product/SearchCountResult";
import SideFilter from "../../Components/Utility/SideFilter";
import ProductCard from "../../Components/Product/ProductCard";
import Pagination from "../../Components/Utility/Pagination";
import ViewShopProductsHook from "../../Custom Hooks/product/ViewShopProductsHook";
export default function ShopProductsPage() {
  const [items, getPage] = ViewShopProductsHook();

  return (
    <div
      className="products"
      style={{ minHeight: "calc(100vh - 72px - 57px)" }}
    >
      <NavCategory />
      <div className="container m-auto p-4 xl:px-36">
        <SearchCountResult searchCount={items.length} />
        <div className="grid grid-flow-col gap-2 mt-4">
          <SideFilter />
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-4">
              {
                items.data && items.data.map((product, i) => <ProductCard
                  key={i}
                  img={product.imageCover}
                  title={product.title}
                  price={product.price}
                  currency={"جنيه"}
                  rate={product.ratingsQuantity}
                  id={product._id}

                />)
              }
            </div>
            <Pagination pageCount={items.paginationResult?.numberOfPages} getPage={getPage} />
          </div>
        </div>
      </div>
    </div>
  );
}
