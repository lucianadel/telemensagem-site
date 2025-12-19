import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { mensagens } from "../../services/mensagens";

export default function Mensagem() {
  const { tipo, id } = useParams();
  const texto = mensagens[tipo]?.[id];

  return (
    <>
      <Header />
      <main>
        {!texto && <p>Mensagem não encontrada</p>}

        {texto && (
          <>
            <h1>Mensagem</h1>
            <p>{texto}</p>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
