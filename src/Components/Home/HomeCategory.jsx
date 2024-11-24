import React, { useEffect } from "react";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../Reducer/Slices/CategorySlice";
import LoadingUI from "../Utility/LoadingUI";
export default function HomeCategory() {
  const data = useSelector(state => state.categoryReducer.category);
  const isLoading = useSelector(state => state.categoryReducer.isLoading);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategory());
  }, []);
  // console.log(data);
  return (
    <div>
      <SubTitle title={"التصنيفات"} button={"المزيد"} link={"all-category"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between">
        { }
        {isLoading ?
          <LoadingUI />
          : data.slice(0, 6).map((value, i) => {
            console.log(value.image);
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
