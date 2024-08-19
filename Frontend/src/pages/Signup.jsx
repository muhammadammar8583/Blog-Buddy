import React, { useState } from "react";
import Input from "../reuseable/Input.jsx";
import Button from "../reuseable/Button.jsx";
import Swal from "sweetalert2";

const Signup = () => {
  const [registerData, setRegisterData] = useState({
    name: "name",
    email: "email",
    password: "password",
  });

  const handleOnChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:3000/user", {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (response) {
      const data = await response.json();
      const token = JSON.stringify(data.token);
      localStorage.setItem("token", token);

      Swal.fire({
        icon: "success",
        title: "Great!",
        text: "User created Successfully!",
      });
      console.log(data);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Error creating user!",
      });
    }
  };

  return (
    <section className="">
      <div className="flex items-center justify-center h-96 w-auto mt-20">
        <div className="bg-gray-700 w-80 p-9 rounded-xl text-white">
          <h1 className="text-center text-3xl font-serif font-extrabold mb-4">
            SignUp
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="font-serif font-bold text-xl">Name:</label>
              <Input
                type="text"
                name="name"
                onChange={(e) => handleOnChange(e)}
                className="mt-3 mb-3 rounded-md bg-gray-600 p-2 w-60 border border-gray-400 outline-none focus:border-blue-700"
              />
            </div>
            <div className="">
              <label className="font-serif font-bold text-xl">
                Your email:
              </label>
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
            <div className="flex">
              <Button
                type="submit"
                btnText={"SignUp"}
                className="mt-5 mx-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
