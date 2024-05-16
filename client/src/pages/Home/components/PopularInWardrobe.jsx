import React from "react";
import Item from "../../../components/Item.jsx";

const PopularInWardrobe = (props) => {

const popular_in_wardrobe = props.products
console.log(popular_in_wardrobe)

  return (
    <div className="grid items-center grid-cols-1 ps-20 sm:p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
      <h1 className="text-4xl font-medium text-center font-Poppins mt-9 col-span-full">
        Popular In Wardrobe
      </h1>
      <hr className="w-[200px] mx-auto h-2 bg-gray-400 rounded-xl col-span-full" />
      {popular_in_wardrobe.map((item) => {
        
        return <Item data={item} key={item.id} />;
      })}
    </div>
  );
};

export default PopularInWardrobe;