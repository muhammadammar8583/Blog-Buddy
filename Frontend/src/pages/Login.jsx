import React, { useState, useEffect } from "react";
import Input from "../reuseable/Input";
import { useNavigate } from "react-router-dom";
import Button from "../reuseable/Button";
import Swal from "sweetalert2";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "email",
    password: "password",
    token: localStorage.getItem("token"),
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response) {
      const data = await response.json();
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: "It is nice to see you back again!",
      }).then(() => {
        navigate("/");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "There is no user like this!",
      });
    }
  };

  // useEffect(() => {
  //   const getLoginData = async () => {
  //     const response = await fetch("http://localhost:3000/user/login", {
  //       method: "POST",
  //       body: JSON.stringify({ token: localStorage.getItem("token") }),
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     });
  //     const data = response.json();
  //     console.log(data);
  //   };
  //   getLoginData();
  // }, []);

  const gotoSignup = () => {
    navigate("/signup");
  };
  return (
    <section className="">
      <div className="flex items-center justify-center h-96 w-auto mt-20">
        <div className="bg-gray-700 w-80 p-12 rounded-xl text-white">
          <h1 className="text-center text-3xl font-serif font-extrabold mb-4">
            Login
          </h1>
          <form action="POST" onSubmit={handleOnSubmit}>
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
                className="mt-3 rounded-md bg-gray-600 p-2 w-60 border border-gray-400 outline-none focus:border-blue-700"
              />
            </div>
            <div className="flex">
              <Button
                type="submit"
                btnText={"Login"}
                className="mt-8 mb-5 mx-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              />
            </div>
          </form>
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
