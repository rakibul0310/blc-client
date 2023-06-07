import { Route, Routes } from "react-router-dom";
import Home from "./pages/frontPages/Home";
import "./styles/global.scss";
import Courses from "./pages/frontPages/courses/Courses";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
