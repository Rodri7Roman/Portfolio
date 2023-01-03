import logo from "./logo.svg";
import Nav from "./components/Nav/Nav";
import Proyectos from "./components/Proyectos/Proyectos";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  let location = useLocation();
  location = location.pathname;
  return (
    <div className="container-app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About location={location} />} />
        <Route path="/proyectos" element={<Proyectos location={location} />} />
        <Route path="/contacto" element={<Contact location={location} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
