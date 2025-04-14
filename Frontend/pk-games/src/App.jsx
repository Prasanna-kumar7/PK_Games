import { React, useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Nav from "./Components/Navbar/Nav.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Community from "./Pages/Community/Community.jsx";
import About from "./Pages/About/About.jsx";
import Support from "./Pages/Support/Support.jsx";
import { Routes, Route } from "react-router-dom";
import Discover from "./Components/Discover/Discover.jsx";
import Genres from "./Components/Browse/Genres.jsx";
import Signin from "./Pages/User/Signin.jsx";
import Signup from "./Pages/User/Signup.jsx";
import Wishlist from "./Pages/Wishlist/Wishlist.jsx";
import Launcher from "./Pages/Launcher/Launcher.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

const App = () => {
  const [wishlist, setWishlist] = useState([]);
  return (
    <div>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}>
          {/* Index route for / */}
          <Route
            index
            element={<Discover wishlist={wishlist} setWishlist={setWishlist} />}
          />
          {/* Child route for /browse */}
          <Route path="browse" element={<Genres />} />
        </Route>
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/wishlist"
          element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />}
        />
        <Route path="/launcher" element={<Launcher />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
