import React from 'react';
import BrandCard from './BrandCard';
import LoadingUI from '../Utility/LoadingUI';
const BrandContainer = ({ allBrands, isLoading }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
      {
        isLoading ? <LoadingUI />
          :
          allBrands.data && allBrands.data.map((value, i) => {
            return <BrandCard key={i} img={value.image} />;
          })
      }
    </div>
  );
};

export default BrandContainer;
