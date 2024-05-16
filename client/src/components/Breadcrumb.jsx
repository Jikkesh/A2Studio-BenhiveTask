import React from "react";
import ArrowIcon from "../assets/breadcrum_arrow.png";

const Breadcrumb = (props) => {
  const { product } = props.data;

  return (
    <div className="flex items-center text-lg mx-10 my-2">
      Home <img src={ArrowIcon} alt="" className="m-2" /> {product.data.category}{" "}
      <img src={ArrowIcon} alt="" className="m-2" />
      {product.data.name}
    </div>
  );
};

export default Breadcrumb;
