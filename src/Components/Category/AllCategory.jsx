import React from "react";
import SubTitle from "../Utility/SubTitle";
import CategoryCard from "./CategoryCard";
import clothe from "../../assets/images/clothe.png";
import Pagination from "../Utility/Pagination";
export default function AllCategory() {
  return (
    <div
      className="all-category"
      style={{ minHeight: "calc(100vh - 72px - 57px)" }}
    >
      <div className="container m-auto p-4 xl:px-36">
        <SubTitle title={"كل التصنيفات"} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
          <CategoryCard img={clothe} title={"أجهزة منزلية"} />
        </div>
        <Pagination />
      </div>
    </div>
  );
}
