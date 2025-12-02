import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";

export default function Categoria() {
  const { id } = useParams();

  // Aqui vamos colocar apenas a coleção 654, na categoria "romantico"
  const todasMensagens = {
    romantico: [
      {
        id: 65401,
        nome: "Você é Muito Especial Para Mim (Masculino)",
        arquivo: "/audios/romantico/vc-e-muito-especial-masculino.mp3",
        voz: "Masculino"
      },
      {
        id: 65402,
        nome: "Romântica Sensual (Masculino)",
        arquivo: "/audios/romantico/romantica-sensual-masculino.mp3",
        voz: "Masculino"
      }
    ],

    // Deixo as outras categorias vazias por enquanto
    aniversario: [],
    amor: [],
    amizade: [],
    desculpas: [],
    motivacao: []
  };

  const mensagens = todasMensagens[id] || [];

  return (
    <>
      <Header />

      <Container>
        <h1>{id.toUpperCase()}</h1>

        {mensagens.length === 0 && (
          <p>Não há mensagens cadastradas ainda para esta categoria.</p>
        )}

        <Lista>
          {mensagens.map((msg) => (
            <Card key={msg.id}>
              <p>{msg.nome}</p>

              <audio controls>
                <source src={msg.arquivo} type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>

              <BotaoWhats
                href={`https://wa.me/?text=Quero%20essa%20mensagem:%20${encodeURIComponent(
                  msg.nome
                )}`}
                target="_blank"
              >
                Enviar pelo WhatsApp
              </BotaoWhats>
            </Card>
          ))}
        </Lista>
      </Container>

      <Footer />
    </>
  );
}

/* ======== ESTILOS ======== */

const Container = styled.div`
  padding: 40px;
  text-align: center;

  h1 {
    margin-bottom: 30px;
    font-size: 2rem;
  }
`;

const Lista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 700px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.lilasClaro};
  padding: 20px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.sombras.leve};
  text-align: left;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colors.vermelhoPrincipal};
  }

  audio {
    width: 100%;
    margin-bottom: 12px;
  }
`;

const BotaoWhats = styled.a`
  background: ${({ theme }) => theme.colors.vermelhoPrincipal};
  padding: 12px 18px;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.vermelhoClaro};
  }
`;
