import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Catalogo() {
  const categorias = [
  { id: "aniversario", nome: "Aniversário" },
  { id: "amor", nome: "Amor" },
  { id: "amizade", nome: "Amizade" },
  { id: "desculpas", nome: "Desculpas" },
  { id: "motivacao", nome: "Motivação" },
  { id: "romantico", nome: "Romântico" } // <-- adiciona esta linha
];


  return (
    <>
      <Header />

      <Container>
        <h1>Catálogo de Mensagens</h1>

        <Grid>
          {categorias.map((cat) => (
            <Link key={cat.id} to={`/categoria/${cat.id}`}>
              <Card>
                <p>{cat.nome}</p>
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

/* ============ ESTILOS ============= */

const Container = styled.div`
  padding: 40px;
  text-align: center;

  h1 {
    margin-bottom: 30px;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.cinzaEscuro};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.lilasClaro};
  padding: 30px 10px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.sombras.leve};
  cursor: pointer;
  transition: 0.2s;
  border: 2px solid transparent;

  p {
    font-weight: bold;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.vermelhoPrincipal};
  }

  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.colors.vermelhoPrincipal};
  }
`;
