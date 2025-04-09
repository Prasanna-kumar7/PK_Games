import React from "react";
import "./App.css";
import games from "./Game-data";
import Home from "./Pages/Home/Home.jsx";
import Nav from "./Components/Navbar/Nav.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
