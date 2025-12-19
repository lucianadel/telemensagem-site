import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

import { Main, Hero, Title, Text } from "./styles";

export default function Home() {
  return (
    <>
      <Header />

      <Main>
        <Hero>
          <Title>Bem-vindo(a)</Title>

          <Text>
            Escolha uma categoria de mensagens para começar ✨
          </Text>

          <Link to="/catalogo">
            <Button>Ver Catálogo</Button>
          </Link>
        </Hero>
      </Main>

      <Footer />
    </>
  );
}
