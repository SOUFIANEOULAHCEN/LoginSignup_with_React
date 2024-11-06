import React from "react";
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="w-[50%] h-auto py-10 px-8 border shadow-lg rounded-lg text-gray-900 ">
      {/* block for sign up */}
      <div className="flex flex-col gap-4">
        <h1 className="text-gray-950 font-bold text-4xl">
          Lets Register Account
        </h1>
        <h5 className="text-gray-950 text-2xl font-semibold">
          Hello user, you have
          <br />a greatful journey
        </h5>
        <div className="mt-6 flex flex-col gap-2">
          {/* username */}
          <input
            type="text"
            className="border px-6 py-2 rounded-lg text-xl "
            placeholder="Name"
          />
          <input
            type="text"
            className="border px-6 py-2 rounded-lg text-xl "
            placeholder="Businesse Name"
          />
          <input
            type="text"
            className="border px-6 py-2 rounded-lg text-xl "
            placeholder="Phone"
          />
          <input
            type="email"
            className="border px-6 py-2 rounded-lg text-xl "
            placeholder="Email"
          />
          <input
            type="password"
            className="border px-6 py-2 rounded-lg text-xl "
            placeholder="Password "
          />
        </div>
        <button className="bg-gray-950 text-gray-100 py-3 rounded-lg hover:bg-gray-800 duration-300">
          Sign up
        </button>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <span className="text-lg">
          Already have an account ? <Link to="/Login" className="text-xl font-semibold hover:text-blue-600 duration-300">Login</Link>
        </span>
      </div>
    </div>
  );
}
// Already  have an account ? Login
export default Login;
