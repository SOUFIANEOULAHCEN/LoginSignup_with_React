import "./App.css";
import Login from "./compenant/Login";
import Signup from "./compenant/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
