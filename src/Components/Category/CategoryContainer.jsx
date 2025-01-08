import React from 'react';
import CategoryCard from "./CategoryCard";
import LoadingUI from "../Utility/LoadingUI";

const CategoryContainer = ({ data, isLoading }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {isLoading ? <LoadingUI />
        :
        data && data.data.map((value, i) => {
          return (
            <CategoryCard key={i} img={value.image} title={value.name} keyBackground={Math.floor(Math.random() * 4 + 1)} />
          );
        })
      }
    </div>
  );
};

export default CategoryContainer;
