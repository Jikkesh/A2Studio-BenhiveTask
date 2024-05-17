import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login_service } from "../../API/services/Auth_services.js";
import { useAuth } from "../../context/AuthContext.jsx";

const Login = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear previous errors
  };

  const handleClicked = () => {
    navigate("/signup");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
      return;
    }
    // Validate password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit",
      }));
      return;
    }
 
    const body = {
      email: formData.email,
      password: formData.password
    }

    login_service(body , handleLogin,navigate);
   
  };

  return (
    <div className="flex flex-col items-center justify-center w-full m-auto h-screen bg-gradient-to-b from-purple-100 to-white">
      <h1 className="text-5xl mb-5 font-bold">Login</h1>
      <form
        className="flex flex-col w-96 h-3/5"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className={`mb-2 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg ${errors.email && "border-red-500"
            }`}
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mb-2">{errors.email}</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className={`mb-2 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg ${errors.password && "border-red-500"
            }`}
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mb-2">{errors.password}</p>
        )}
        <button
          type="submit"
          className="border-2 border-gray-200 bg-gray-300 h-12 w-full font-bold rounded-lg"
        >
          Login
        </button>
        <p className="mt-2 text-xs ">
          {"Don't have an account?"}
          <span
            className="text-blue-500 cursor-pointer ml-2"
            onClick={handleClicked}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

