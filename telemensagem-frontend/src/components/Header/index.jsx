import styled from "styled-components";
import { Link } from "react-router-dom";

const Topo = styled.header`
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.gradientes.romantico};
  box-shadow: ${({ theme }) => theme.sombras.leve};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.titulo};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textoClaro};
`;

const Menu = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: ${({ theme }) => theme.colors.textoClaro};
    text-decoration: none;
    font-weight: bold;
    transition: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.douradoSuave};
    }
  }
`;

export default function Header() {
  return (
    <Topo>
      <Logo>Voz & Alma 💖</Logo>

      <Menu>
        <Link to="/">Home</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/como-funciona">Como Funciona</Link>
      </Menu>
    </Topo>
  );
}
