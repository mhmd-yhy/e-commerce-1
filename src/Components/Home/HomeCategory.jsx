import React from "react";
import CategoryCard from "../Category/CategoryCard";
import laptop from "../../assets/images/labtop.png";
import clothe from "../../assets/images/clothe.png";
import laptop1 from "../../assets/images/labtop.png";
import clothe1 from "../../assets/images/clothe.png";
import laptop2 from "../../assets/images/labtop.png";
import clothe2 from "../../assets/images/clothe.png";
import SubTitle from "../Utility/SubTitle";

export default function HomeCategory() {
  const images = [laptop, clothe, laptop1, clothe1, laptop2, clothe2];
  return (
    <div>
      <SubTitle title={"التصنيفات"} button={"المزيد"} link={"all-category"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between">
        {images.map((brand, i) => {
          return (
            <CategoryCard
              key={i}
              background={i < 4 ? i + 1 : (i = 1)}
              img={brand}
              title={"أجهزة منزلية"}
            />
          );
        })}
      </div>
    </div>
  );
}
