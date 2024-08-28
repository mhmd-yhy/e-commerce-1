import React from "react";
import { FaStar } from "react-icons/fa";

const RateItem = () => {
  return (
    <div className="p-4 pb-3 border-b border-b-neutral-300 text-sm">
      <h2 className="text-neutral-600 font-bold flex gap-2 items-center">
        احمد محمود{" "}
        <span className="text-yellow-400 font-bold flex gap-2 items-center">
          4.3 <FaStar />
        </span>
      </h2>
      <p className="text-neutral-600">
        منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة
      </p>
    </div>
  );
};

export default RateItem;
