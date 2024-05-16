import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDisplay = (props) => {
    const { product } = props.data;



    return (
        <div className="flex items-center h-screen justify-center ml-10">
            <div className="flex justify-center items-center gap-10">
                <div className="flex flex-col gap-4 max-h-46">
                    <img src={product.data.image_url} alt="" className="w-40 h-46" />
                    <img src={product.data.image_url} alt="" className="w-40 h-46" />
                    <img src={product.data.image_url} alt="" className="w-40 h-46" />
                </div>
                <div>
                    <img src={product.data.image_url} alt="" className="w-96 h-[600px]" />
                </div>
            </div>
            <div className="flex flex-col flex-1 ml-10 w-1/2">
                <h1 className="text-2xl font-bold mb-4 mt-5">{product.data.name}</h1>
                <p className="text-gray-600 mb-4">{product.data.category}</p>
                <div className="mb-4">
                    <div className="flex items-center gap-3">
                        <p className="text-lg font-regular line-through">
                            Price: ₹{product.data.old_price}
                        </p>
                        <p className="text-lg text-orange-500 font-Poppins font-bold">
                            Price: ₹{product.data.new_price}
                        </p>
                    </div>
                    <p className="text-gray-700">Category: {product.data.category}</p>
                    <p className="text-gray-700">Brand: {product.data.brand}</p>
                </div>
                <div className="flex flex-row gap-4 w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>

                <div className="flex items-center mb-2 justify-start space-x-4">
                    <a 
                        href="/thank-you"
                        className="bg-orange-400 w-40 text-white px-4 py-2 rounded hover:bg-slate-500"
                    >
                        Book a Call
                    </a>

                    <ToastContainer toastStyle={{ backgroundColor: "lightgreen", color: "black", fontWeight: "bold", marginTop: "28px" }} />
                </div>
                <div className="flex flex-col my-2">
                    <p>
                        <span className="font-bold">Category :</span> {product.data.category}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;