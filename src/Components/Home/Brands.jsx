import React from "react";
import SubTitle from "../Utility/SubTitle";
import BrandCard from "../Brands/BrandCard";
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
export default function Brands() {
  return (
    <div>
      <SubTitle title={"أشهر الماركات"} button={"المزيد"} link={"all-brands"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
      </div>
    </div>
  );
}
