import { Route, Routes } from "react-router-dom";
import Home from "./pages/frontPages/Home";
import "./styles/global.scss";
import Courses from "./pages/frontPages/courses/Courses";
import Dashboard from "./pages/dashboard/Dashboard";
import Register from "./pages/frontPages/Register/Register";
import Login from "./pages/frontPages/Login/Login";
import About from "./pages/frontPages/about/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
