import React from "react";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
import LoadingUI from "../Utility/LoadingUI";
import HomeCategoryHook from "../../Custom Hooks/category/HomeCategoryHook";
export default function HomeCategory() {
  const [categories, isLoading] = HomeCategoryHook();
  return (
    <div>
      <SubTitle title={"التصنيفات"} button={"المزيد"} link={"all-category"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between">
        {isLoading ?
          <LoadingUI />
          : categories.data && categories.data.slice(0, 6).map((value, i) => {
            return (
              <CategoryCard
                key={i}
                keyBackground={Math.floor(Math.random() * 4 + 1)}
                img={value.image}
                title={value.name}
              />
            );
          })}
      </div>
    </div>
  );
}
