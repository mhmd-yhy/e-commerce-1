import React from "react";
import SubTitle from "../Utility/SubTitle";
import LoadingUI from "../Utility/LoadingUI";
import BrandCard from "../Brands/BrandCard";
import HomeBrandHook from "../../Custom Hooks/brand/HomeBrandHook";
export default function Brands() {
  const [brands, loading] = HomeBrandHook();
  console.log(brands);
  return (
    <div>
      <SubTitle title={"أشهر الماركات"} button={"المزيد"} link={"all-brands"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {loading ? <LoadingUI />
          : brands?.data && brands.data.slice(0, 6).map((value, i) => {
            return <BrandCard key={i} _id={value._id} img={value.image} />;
          })}
      </div>
    </div>
  );
}
