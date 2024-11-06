import { useState ,useEffect} from "react";
import "./App.css";
import Login from "./compenant/Login";
import Signup from "./compenant/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  const [users , SetUsers]=useState([]);
  useEffect(() => {
    console.log("Updated users:", users);
  }, [users]);
  return (
    <div className="flex items-center justify-center w-full h-screen">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Signup users={users} SetUsers={SetUsers} />} />
          <Route path="/Login" element={<Login users={users} />} />
        </Routes>
    </div>
  );
}

export default App;
