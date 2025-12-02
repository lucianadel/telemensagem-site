import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Categoria from "./pages/Categoria";
import ComoFunciona from "./pages/ComoFunciona";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/categoria/:id" element={<Categoria />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
      </Routes>
    </BrowserRouter>
  );
}
