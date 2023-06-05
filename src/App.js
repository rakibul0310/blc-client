import { Route, Routes } from "react-router-dom";
import Home from "./pages/frontPages/Home";
import "./styles/global.scss";
import Footer from "./componentes/Footer/Footer";
import Courses from "./pages/frontPages/courses/Courses";
// import Header from "./pages/frontPages/Header";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
