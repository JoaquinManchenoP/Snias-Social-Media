import Home from "./Pages/Home/Home";
import {Routes, Route, Link, Navigate} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";



function App() {
  const { user} = useContext(AuthContext);
  return (
  <Routes>
    <Route exact path="/" element={user ? <Home /> : <Register />} />
    <Route exact path="/login" element={user ? <Navigate to = '/' />: <Login />} />
    <Route path="/register" element={user ? <Navigate to = '/'/> :<Register/>} />
    <Route path="/profile/:username" element={<Profile />} />
  </Routes>
  );
}

export default App;
