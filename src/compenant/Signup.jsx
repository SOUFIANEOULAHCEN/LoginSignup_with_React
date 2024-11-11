import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Signup(props) {
  // gerer l'etat de l'affichage de l'alert
  // const [showAlert, SetshowAlert] = useState(false);
  //
  const [erreurs, setErreurs] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  //gerer la validation de form
  // const [valid, setValid] = useState(false);
  const name = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();

  // useEffect(() => {
  //   if (valid) {
  //     SetshowAlert(true);
  //     setTimeout(() => {
  //       SetshowAlert(false);
  //     }, 3000);
  //   }
  // }, [valid]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    HandleUser();
  };

  const HandleUser = () => {
    setErreurs({}); // reset des erreurs
    let isValid = true;

    const nameValue = name.current.value.trim();
    const phoneValue = phone.current.value.trim();
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value.trim();

    // regex
    const moroccanPhoneRegex = /^(?:\+212|0)([ \-]?\d){9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validation des champs
    const newErrors = {};

    if (nameValue === "") {
      newErrors.name = "Invalid Name";
      isValid = false;
    }

    if (!moroccanPhoneRegex.test(phoneValue)) {
      newErrors.phone = "Invalid Phone number";
      isValid = false;
    }

    if (!emailRegex.test(emailValue)) {
      newErrors.email = "Invalid Email";
      isValid = false;
    }

    if (passwordValue === "") {
      newErrors.password = "Invalid Password";
      isValid = false;
    }

    setErreurs(newErrors);

    if (isValid) {
      const NewUser = {
        name: nameValue,
        phone: phoneValue,
        email: emailValue,
        password: passwordValue,
      };

      // ajouter new user
      props.SetUsers((prev) => [...prev, NewUser]);
      // Reset les champs
      name.current.value = "";
      phone.current.value = "";
      email.current.value = "";
      password.current.value = "";

      // setValid(true);
    }
  };

  return (
    <div className="w-[50%] h-auto py-10 px-8 border shadow-lg rounded-lg text-gray-900 ">
      {/* {showAlert && (<Alert message="Action was successful!" type="success" />)}{" "} */}
      <div className="flex flex-col gap-4">
        <h1 className="text-gray-950 font-bold text-4xl">
          Let's Register Account
        </h1>
        <h5 className="text-gray-950 text-2xl font-semibold">
          Hello user, you have a greatful journey
        </h5>
        <div className="mt-6">
          <form onSubmit={HandleSubmit} className="flex flex-col gap-2">
            <input
              ref={name}
              type="text"
              className="border px-6 py-2 rounded-lg text-xl "
              placeholder="Name"
            />
            {erreurs.name && (
              <span className="px-5 text-sm mt-[-5px] text-red-600 font-semibold">
                {erreurs.name}*
              </span>
            )}

            <input
              ref={phone}
              type="text"
              className="border px-6 py-2 rounded-lg text-xl "
              placeholder="Phone"
            />
            {erreurs.phone && (
              <span className="px-5 text-sm mt-[-5px] text-red-600 font-semibold">
                {erreurs.phone}*
              </span>
            )}

            <input
              ref={email}
              type="email"
              className="border px-6 py-2 rounded-lg text-xl "
              placeholder="Email"
            />
            {erreurs.email && (
              <span className="px-5 text-sm mt-[-5px] text-red-600 font-semibold">
                {erreurs.email}*
              </span>
            )}

            <input
              ref={password}
              type="password"
              className="border px-6 py-2 rounded-lg text-xl "
              placeholder="Password"
            />
            {erreurs.password && (
              <span className="px-5 text-sm mt-[-5px] text-red-600 font-semibold">
                {erreurs.password}*
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

export default Signup;
