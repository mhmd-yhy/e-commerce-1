import React from 'react';
import BrandCard from './BrandCard';
const BrandContainer = ({ data, isLoading }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
      {
        data && data.map((value, i) => {
          return <BrandCard key={i} img={value.image} />;
        })
      }
    </div>
  );
};

export default BrandContainer;
