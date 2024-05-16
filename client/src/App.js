import './App.css';
import React, { useState, useEffect } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShopCategory from "../src/components/ShopCategory.jsx";

import banner_0 from "./assets/Banner/banner_4.png"
import banner_1 from "./assets/Banner/banner_1.jpg"
import banner_2 from "./assets/Banner/banner_2.jpg"
import banner_3 from "./assets/Banner/banner_3.jpg"

import Product from "./components/Product.jsx";
import Login from './pages/Auth/Login.jsx';
import Signup from './pages/Auth/Signup.jsx';
import Thankyou from './pages/Home/components/Thankyou.jsx';



const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  });

  return (
    <div>
      {isLoading ? (
        <div class="flex justify-center items-center h-screen">
          <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
        </div>
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/" element={<Home />} />
            <Route path="/bathroom" element={<ShopCategory banner={banner_0} category={"Bathroom"} />} />
            <Route path="/livingroom" element={<ShopCategory banner={banner_1} category={"Living Room"} />} />
            <Route path="/bedroom" element={<ShopCategory banner={banner_2} category={"Bedroom"} />} />
            <Route path="/kitchen" element={<ShopCategory banner={banner_3} category={"Kitchen"} />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path='/thank-you' element = {<Thankyou/>} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
