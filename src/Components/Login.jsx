import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; // Updated import

const Login = () => {
  // router
  const navigate = useNavigate(); // Updated hook

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    try {
      console.log(data);

      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);

      setUsername("");
      setPassword("");

      const role = responseData.user.role;
      console.log(role);
      const userId = responseData.user.id;
      console.log(userId);

      if (role === "admin") {
        navigate("/adminpanel");
      } else if (role === "user") {
        navigate("/clubpanel", { state: { userId } });
      } else {
        alert("Wrong username or password");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to login. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-50 pt-5 flex items-center justify-center">
        <div className="w-[500px] bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative ">
          <h1 className="font-bold text-3xl text-slate-800 text-center">
            Login
          </h1>
          <form action="/adminpanel" method="POST" onSubmit={handleLogin}>
            <div className="relative my-4">
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer"
              />
              <label
                htmlFor="username"
                className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 text-slate-700"
              >
                Username
              </label>
            </div>
            <div className="relative my-4">
              <input
                type="password"
                id="password"
                name="password"
                required
                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="password"
                className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 text-slate-700"
              >
                Your Password
              </label>
            </div>
            <button
              type="submit"
              className="w-full mb-4 text-[18px] mt-6 rounded bg-slate-500 py-2 hover:bg-slate-600 transition-colors duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
