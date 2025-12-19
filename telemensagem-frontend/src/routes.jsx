import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Categoria from "./pages/categoria";
import Mensagem from "./pages/Mensagem";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/categoria/:tipo" element={<Categoria />} />
      <Route path="/mensagem/:tipo/:id" element={<Mensagem />} />
    </Routes>
  );
}


