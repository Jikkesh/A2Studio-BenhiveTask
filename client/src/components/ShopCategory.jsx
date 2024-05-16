import React, { useState, useEffect } from "react";
import Item from "../components/Item.jsx";
import { getProducts } from "../API/services/Product_services.js";

const ShopCategory = (props) => {
  console.log(props)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getProducts();
        const filteredProducts = allProducts.filter(
          (product) => product.category === props.category
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [props.category]);


  return (
    <div>
      <div className="flex items-center justify-between mt-4 ml-3">
        <p>
          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-sky-400">
            {props.category}</span></h1>
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3 m-auto">
        {products.map((item) => {
          return <Item data={item} key={item.id} />;
        })}
      </div>

    </div>
  );
};

export default ShopCategory;

