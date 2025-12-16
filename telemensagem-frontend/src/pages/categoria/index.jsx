import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { mensagens } from "../../services/mensagens";
import { useParams } from "react-router-dom";

export default function Categoria() {
  const { tipo } = useParams();
  const lista = mensagens[tipo];

  return (
    <>
      <Header />
      <main>
        <h1>{tipo}</h1>

        {!lista && <p>Categoria não encontrada</p>}

        {lista && (
          <ul>
            {lista.map((texto, index) => (
              <li key={index}>{texto}</li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
