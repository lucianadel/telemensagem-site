import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.fundoClaro};
    color: ${({ theme }) => theme.colors.textoPrincipal};
    font-family: ${({ theme }) => theme.fonts.texto};
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.titulo};
  }

  button {
    cursor: pointer;
  }
`;
