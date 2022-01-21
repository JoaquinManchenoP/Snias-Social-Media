import Home from "./Pages/Home/Home";
import {Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";


function App() {
  return (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route  exact path="/login" element={<Login />} />
    <Route path="/register" element={<Register/>} />
    <Route path="/profile/:username" element={<Profile />} />
  </Routes>
  );
}

export default App;
