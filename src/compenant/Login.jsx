import React from "react";
import { FcGoogle } from "react-icons/fc"; //google icon with color
import { BiLogoFacebook } from "react-icons/bi"; //facebook  icon
import { IoLogoApple } from "react-icons/io5"; //apple ios icon
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <div className="w-[50%] h-auto py-10 px-8 border shadow-lg rounded-lg text-gray-900 ">
        {/* block for sign up */}
      <div className="flex flex-col gap-6">
        <h1 className="text-gray-950 font-bold text-5xl">Lets Sign you in</h1>
        <h5 className="text-gray-950 text-4xl font-semibold">
          Welcome Back ,<br />
          You have been missed
        </h5>
        <div className="mt-6 flex flex-col gap-2">
            {/* username */}
          <input
            type="text"
            className="border px-6 py-2 rounded-lg text-xl "
            placeholder="Email,phone & username"
          />
          <div className="flex flex-col gap-1">
            {/* password */}
            <input
              type="text"
              className="border px-6 py-2 rounded-lg"
              placeholder="Password"
            />
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm font-semibold text-gray-950 px-6 py-2 hover:text-blue-700 duration-300"
              >
                Forgot Password ?
              </a>
            </div>
          </div>
        </div>
        <button className="bg-gray-950 text-gray-100 py-3 rounded-lg hover:bg-gray-800 duration-300">
          Sign in
        </button>
      </div>

      <div class="flex items-center my-4">
        <div class="flex-grow border-t border-gray-300"></div>
        <span class="mx-4 text-gray-500">or</span>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-center gap-6 *">
          <a href="#">
            <FcGoogle className="text-4xl" />
          </a>
          <a href="#">
            <BiLogoFacebook className="text-4xl" />
          </a>
          <a href="#">
            <IoLogoApple className="text-4xl" />
          </a>
        </div>
        <div className="flex items-center justify-center ">
          <p className="text-lg ">
            Don’t have an account ?{" "}
            <Link to="/" className="font-semibold hover:text-blue-600">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;