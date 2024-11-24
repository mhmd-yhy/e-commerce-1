import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount, getPage }) {
  const handlePageClick = (data) => {
    // console.log(data.selected + 1);
    getPage(data.selected + 1);
  };
  return (
    <div className="mt-8">
      <ReactPaginate
        previousLabel="السابق"
        nextLabel="التالي"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination flex justify-center items-center gap-2 mt-4 mb-4"
        pageClassName="page-item "
        pageLinkClassName="page-link bg-transparent border-2 border-neutral-400 rounded-lg py-1 px-3 text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50 hover:border-stone-50"
        previousClassName="page-item"
        previousLinkClassName="page-link bg-transparent border-2 border-neutral-400 rounded-lg py-1 px-3 text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50 hover:border-stone-50"
        nextClassName="page-item"
        nextLinkClassName="page-link bg-transparent border-2 border-neutral-400 rounded-lg py-1 px-3 text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50 hover:border-stone-50"
        activeClassName="active"
      />
    </div>
  );
}
