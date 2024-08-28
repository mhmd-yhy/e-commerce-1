import { useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";

export default function SearchCountResult() {
  const [dropdownMood, setDropdownMood] = useState("hidden");
  return (
    <div className="flex justify-between items-center">
      <div className="search-count text-lg text-neutral-600 font-bold">
        <span>400</span> نتيجة بحث
      </div>

      <div className="search-count text-lg text-neutral-600 font-bold">
        <div className="sort-Dropdown relative">
          <button
            className="text-neutral-600 font-bold flex items-center gap-2 text-base"
            onClick={() =>
              setDropdownMood(dropdownMood === "hidden" ? "block" : "hidden")
            }
          >
            <FaSortAmountDown />
            ترتيب حسب
          </button>
          <ul
            className={` bg-stone-50 absolute top-full left-0 overflow-hidden cursor-pointer rounded-lg duration-500 w-44 text-base shadow-lg border border-neutral-200 ${dropdownMood}`}
          >
            <li className="text-neutral-700 text-sm hover:bg-gray-100 duration-500 p-2">
              الأكثر مبيعاً
            </li>
            <li className="text-neutral-700 text-sm hover:bg-gray-100 duration-500 p-2">
              الأعلى تقييماً
            </li>
            <li className="text-neutral-700 text-sm hover:bg-gray-100 duration-500 p-2">
              السعر من الأقل للأعلى
            </li>
            <li className="text-neutral-700 text-sm hover:bg-gray-100 duration-500 p-2">
              السعر من الأعلى للأقل
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
