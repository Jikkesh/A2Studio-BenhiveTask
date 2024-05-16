import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb.jsx";
import ProductDisplay from "../components/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox";
import { getProductById } from "../API/services/Product_services.js";

const Product = () => {

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isProduct, setIsProduct] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(productId);
        console.log(productData)
        setProduct(productData);
        setIsProduct(false)
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);


  return (
    <>
      {isProduct ? (
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
        </div>
      ) : (
        <div>
          <Breadcrumb data={{ product }} />
          <ProductDisplay data={{ product }} />
          <DescriptionBox />
        </div>
      )}
    </>
  );
};

export default Product;
