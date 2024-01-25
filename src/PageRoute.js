import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Nopage from "./pages/Nopage";
import { Cart } from "./pages/Cart";
import { useState } from "react";
const PageRoute = () => {
  const [cart, setCart] = useState();
  return (
    <>
      <NavBar cart={cart} setCart={setCart} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default PageRoute;
