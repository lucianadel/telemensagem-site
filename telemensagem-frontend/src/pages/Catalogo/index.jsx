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
          <li>Amor</li>
          <li>Aniversário</li>
          <li>Agradecimento</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
