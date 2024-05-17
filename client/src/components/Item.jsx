import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { id, name, image_url, new_price, old_price } = props.data;

  return (
    <div className="m-5 cursor-pointer">
      <Link to={`/product/${id}`}>
        <div className="transition delay-300 scale-100 hover:scale-95">
          <div className="w-50 h-48 overflow-hidden">
            <img
              onClick={() => window.scrollTo(0, 0)}
              src={image_url}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-500 max-w-xs truncate">{name}</p>
          <div className="flex flex-row gap-3">
            <p className="font-semibold text-gray-500 line-through">
              $ {old_price}
            </p>
            <p className="font-semibold text-black">₹ {new_price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;