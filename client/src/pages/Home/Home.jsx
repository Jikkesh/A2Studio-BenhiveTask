import React, { useEffect, useState } from "react";
import Hero from "./components/Hero.jsx";
import PopularInKitchen from "./components/PopularInKitchen.jsx";
import PopularInBedroom from "./components/PopularInBedroom.jsx";
import PopularInLivingroom from "./components/PopularInLivingroom.jsx";
import PopularInBathroom from "./components/PopularInBathroom.jsx";
import { getProducts } from "../../API/services/Product_services.js";

const Home = () => {

  const [isData, setIsData] = useState(false);
  const [bedroomProducts, setBedroomProducts] = useState(null);
  const [kitchenProducts, setKitchenProducts] = useState(null);
  const [livingroomProducts, setLivingroomProducts] = useState(null);
  const [bathroomProducts, setBathroomProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        console.log(products);


        setBedroomProducts(products.filter(
          (product) => product.category === "Bedroom"
        ));

        setKitchenProducts(products.filter(
          (product) => product.category === "Kitchen"
        ));

        setLivingroomProducts(products.filter(
          (product) => product.category === "Living Room"
        ));

        setBathroomProducts(products.filter(
          (product) => product.category === "Bathroom"
        ));


        setIsData(true);


      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);



  return (
    <div className="h-max w-full flex flex-col items-center">
      {isData ? <>
        <Hero />
        <div className="max-w-screen-xl">
          <PopularInKitchen products={kitchenProducts.slice(0, 4)} />
          <PopularInBedroom products={bedroomProducts.slice(0, 4)} />
          <PopularInLivingroom products={livingroomProducts.slice(0, 4)} />
          <PopularInBathroom products={bathroomProducts.slice(0, 4)} />
        </div>
      </>

        :

        <div class="flex gap-2 h-[100vh] mt-20">
          <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
          <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
          <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
        </div>

      }

    </div>
  );
};

export default Home;