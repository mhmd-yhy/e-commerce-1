import React from "react";

export default function NavCategory() {
  return (
    <div className="nav-category bg-white ">
      <div className="container m-auto p-4 xl:px-36 flex gap-2 flex-wrap text-sm">
        <div className="text-neutral-600 font-bold cursor-pointer">الكل</div>
        <div className="text-neutral-600 font-bold cursor-pointer">
          الكترونيات
        </div>
        <div className="text-neutral-600 font-bold cursor-pointer">ملابس</div>
        <div className="text-neutral-600 font-bold cursor-pointer">كهرباء</div>
        <div className="text-neutral-600 font-bold cursor-pointer">تخفيضات</div>
      </div>
    </div>
  );
}
