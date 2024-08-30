import React from "react";
import CategoryCard from "../Category/CategoryCard";
import laptop from "../../assets/images/labtop.png";
import clothe from "../../assets/images/clothe.png";
import cat2 from "../../assets/images/cat2.png";
import laptops from "../../assets/images/laptops.png";
import mobile1 from "../../assets/images/mobile1.png";
import mobile2 from "../../assets/images/mobile2.png";
import SubTitle from "../Utility/SubTitle";

export default function HomeCategory() {
  const images = [laptop, clothe, cat2, laptops, mobile1, mobile2];
  return (
    <div>
      <SubTitle title={"التصنيفات"} button={"المزيد"} link={"all-category"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between">
        {images.map((brand, i) => {
          return (
            <CategoryCard
              key={i}
              keyBackground={i}
              img={brand}
              title={"أجهزة منزلية"}
            />
          );
        })}
      </div>
    </div>
  );
}
