import { Link } from "react-router-dom";


import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Catalogo() {
  return (
    <>
      <Header />
      <main>
        <h1>Catálogo de Mensagens</h1>
        <p>Escolha uma categoria</p>

       <ul>
  <li>
    <Link to="/categoria/amor">Amor</Link>
  </li>
  <li>
    <Link to="/categoria/aniversario">Aniversário</Link>
  </li>
  <li>
    <Link to="/categoria/agradecimento">Agradecimento</Link>
  </li>
</ul>

      </main>
      <Footer />
    </>
  );
}
