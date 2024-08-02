import React, { useState } from "react";
import Input from "../reuseable/Input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "email",
    password: "password",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const gotoSignup = () => {
    navigate("/singup");
  };
  return (
    <section className="">
      <div className="flex items-center justify-center h-96 w-auto mt-20">
        <div className="bg-gray-700 w-80 p-12 rounded-xl text-white">
          <h1 className="text-center text-3xl font-serif font-extrabold mb-4">
            Login
          </h1>
          <div className="">
            <label className="font-serif font-bold text-xl">Email:</label>
            <Input
              type="email"
              name="email"
              onChange={(e) => handleOnChange(e)}
              className="mt-3 mb-3 rounded-md bg-gray-600 p-2 w-60 border border-gray-400 outline-none focus:border-blue-700"
            />
          </div>
          <div className="">
            <label className="font-serif font-bold text-xl">Password:</label>
            <Input
              type="password"
              name="password"
              onChange={(e) => handleOnChange(e)}
              className="mt-3 mb-3 rounded-md bg-gray-600 p-2 w-60 border border-gray-400 outline-none focus:border-blue-700"
            />
          </div>
          <div className="font-serif font-medium">
            Dont have an account{" "}
            <span
              className="underline cursor-pointer hover:text-blue-700"
              onClick={gotoSignup}
            >
              SignUp
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
