import React from 'react';
import CategoryCard from "./CategoryCard";
import LoadingUI from "../Utility/LoadingUI";

const CategoryContainer = ({ AllCategory, isLoading }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {isLoading ? <LoadingUI />
        :
        AllCategory.data && AllCategory.data.map((value, i) => {
          return (
            <CategoryCard key={i} img={value.image} title={value.name} keyBackground={Math.floor(Math.random() * 4 + 1)} />
          );
        })
      }
    </div>
  );
};

export default CategoryContainer;
