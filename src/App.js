import logo from "./logo.svg";
import Nav from "./components/Nav/Nav";
import Proyectos from "./components/Proyectos/Proyectos";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {

  return (
    <div className="container-app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About  />} />
        <Route path="/portfolio" element={<Proyectos/>} />
        <Route path="/contacto" element={<Contact/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
