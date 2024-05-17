import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

    const { isLogin, handleLogout } = useAuth();

    const doLogout = () => {
        handleLogout();
    }

    return (
        <div className="flex items-center justify-around bg-white shadow-md top-0 left-0 w-full">
            <div className="text-red-500 font-bold text-2xl mx-5 text-center">
                <h2 className="cursor-pointer">
                    <Link to="/">A2Studio</Link>
                </h2>
            </div>
            <div className="flex items-center gap-5 space-x-4">

                <a href="/kitchen" className="hover:text-red-400">
                    Modular Kitchen
                </a>

                <a href="/bedroom" className="hover:text-red-400">
                    Bedroom
                </a>
                <a href="/livingroom" className="hover:text-red-400">
                    Living Room
                </a>
                <a href="/bathroom" className="hover:text-red-400">
                    Bathroom
                </a>
            </div>
            <div className="flex items-center mx-5">
                {isLogin ? (
                    <button
                        className="font-Poppins cursor-pointer text-lg m-5 border text-black bg-white border-gray-400 rounded-3xl px-4 py-1 active:bg-slate-200"
                        onClick={doLogout}
                    >
                        Logout
                    </button>
                ) : (
                    <button className="font-Poppins cursor-pointer text-lg m-5 border text-black bg-white border-gray-400 rounded-3xl px-4 py-1 active:bg-slate-200">
                        <Link to="/login" className="hover:text-red-400">Login</Link>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;

