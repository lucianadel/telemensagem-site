import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h1>Bem-vindo(a)</h1>
        <p>Escolha uma categoria de mensagens para começar ✨</p>
       <Link to="/catalogo">
  <Button>Ver Catálogo</Button>
</Link>

      </div>
      <Footer />
    </>
  );
}
