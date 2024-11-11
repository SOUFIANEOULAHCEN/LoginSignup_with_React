import { useState, useEffect } from "react";
import "./App.css";
import Login from "./compenant/Login";
import Signup from "./compenant/Signup";
import Result from "./compenant/Result";
import { Routes, Route } from "react-router-dom";

function App() {
  const [users, SetUsers] = useState([]);
  const [Valid , SetValid]=useState(true);
  const Save_data = (users) => {
    localStorage.setItem("Authentificion", JSON.stringify(users));
  };
  const Recovered_data = () => {
    const Users_geted = JSON.parse(localStorage.getItem("Authentificion"));
    return Users_geted ? Users_geted : [];
  };

  useEffect(() => {
    // enregistrer data chaque fois qui'ils changent
    Save_data(users);
    console.log("Updated users:", users);
  }, [users,Valid]);
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Routes>
        <Route
          path="/"
          element={<Signup users={users} SetUsers={SetUsers} />}
        />
        <Route
          path="/Login"
          element={<Login Recovered_data={Recovered_data} valid={Valid} setValid={SetValid} />}
        />
        <Route path="/Result" element={<Result valid={Valid} />} />
      </Routes>
    </div>
  );
}

export default App;
