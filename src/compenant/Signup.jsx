import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const [erreurs, SetErreurs] = useState([]);
  const name = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();

  const HandleSubmit = (e) => {
    e.preventDefault();
    HandleUser();
  };

  const HandleUser = () => {
    const nameValue = name.current.value.trim();
    const phoneValue = phone.current.value.trim();
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value.trim();

    const moroccanPhoneRegex = /^(?:\+212|0)([ \-]?\d){9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let tempErrors = [];

    if (nameValue === "") tempErrors.push("Invalid Name");
    if (!moroccanPhoneRegex.test(phoneValue))
      tempErrors.push("Invalid Phone number");
    if (!emailRegex.test(emailValue)) tempErrors.push("Invalid Email");
    if (passwordValue === "") tempErrors.push("Invalid Password");

    if (tempErrors.length > 0) {
      SetErreurs(tempErrors);
      return;
    }

    const NewUser = {
      name: nameValue,
      phone: phoneValue,
      email: emailValue,
      password: passwordValue,
    };

    props.SetUsers((prev) => [...prev, NewUser]);

    name.current.value = "";
    phone.current.value = "";
    email.current.value = "";
    password.current.value = "";

    SetErreurs([]);
  };

  return (
    <div className="w-[50%] h-auto py-10 px-8 border shadow-lg rounded-lg text-gray-900 ">
      <div className="flex flex-col gap-4">
        <h1 className="text-gray-950 font-bold text-4xl">
          Let's Register Account
        </h1>
        <h5 className="text-gray-950 text-2xl font-semibold">
          Hello user, you have a greatful journey
        </h5>
        <div className="mt-6">
          <form
            action=""
            onSubmit={HandleSubmit}
            className="flex flex-col gap-2"
          >
            <input
              ref={name}
              type="text"
              className="border px-6 py-2 rounded-lg text-xl "
              placeholder="Name"
            />
            {erreurs.includes("Invalid Name") && (
              <span className="text-red-600 font-semibold">Invalid Name</span>
            )}

            <input
              ref={phone}
              type="text"
              className="border px-6 py-2 rounded-lg text-xl "
              placeholder="Phone"
            />
            {erreurs.includes("Invalid Phone number") && (
              <span className="text-red-600 font-semibold">
                Invalid Phone number
              </span>
            )}

            <input
              ref={email}
              type="email"
              className="border px-6 py-2 rounded-lg text-xl "
              placeholder="Email"
            />
            {erreurs.includes("Invalid Email") && (
              <span className="text-red-600 font-semibold">Invalid Email</span>
            )}

            <input
              ref={password}
              type="password"
              className="border px-6 py-2 rounded-lg text-xl "
              placeholder="Password"
            />
            {erreurs.includes("Invalid Password") && (
              <span className="text-red-600 font-semibold">
                Invalid Password
              </span>
            )}

            <button
              type="submit"
              className="bg-gray-950 text-gray-100 py-3 rounded-lg hover:bg-gray-800 duration-300"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <span className="text-lg">
          Already have an account ?{" "}
          <Link
            to="/Login"
            className="text-xl font-semibold hover:text-blue-600 duration-300"
          >
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
