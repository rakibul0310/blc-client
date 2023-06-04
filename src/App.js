import { Route, Routes } from "react-router-dom";
import Home from "./pages/frontpages/Home";
import "./styles/global.scss";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
