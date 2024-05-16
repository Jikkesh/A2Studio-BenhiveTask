import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup_service } from "../../API/services/Auth_services";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error message when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate username
    if (!formData.username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Please enter a username",
      }));
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
      return;
    }

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Please enter a valid phone number",
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

    // Validate confirmPassword
    if (formData.password !== formData.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match",
      }));
      return;
    }

    // Form is valid, you can proceed with submission

    const body = {
      name : formData.username,
      email : formData.email,
      phoneNumber : formData.phoneNumber,
      password : formData.password
    }

    signup_service(body ,navigate);
  };

  const handleClicked = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full m-auto h-screen bg-gradient-to-b from-purple-100 to-white">
      <h1 className="text-5xl mb-5 font-bold">Sign up</h1>
      <form className="flex flex-col w-96 h-3/5" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="mb-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
          value={formData.username}
          onChange={handleChange}
        />
        <p className="text-red-500 text-xs mb-2">{errors.username}</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="mb-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
          value={formData.email}
          onChange={handleChange}
        />
        <p className="text-red-500 text-xs mb-2">{errors.email}</p>

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          className="mb-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <p className="text-red-500 text-xs mb-2">{errors.phoneNumber}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="mb-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
          value={formData.password}
          onChange={handleChange}
        />
        <p className="text-red-500 text-xs mb-2">{errors.password}</p>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="mb-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <p className="text-red-500 text-xs mb-2">{errors.confirmPassword}</p>

        <button
          type="submit"
          className="border-2 border-gray-200 bg-gray-300 h-12 w-full font-bold rounded-lg"
        >
          Sign Up
        </button>
        <p className="mt-2 text-xs">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer" onClick={handleClicked}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
