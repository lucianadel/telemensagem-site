import styled from "styled-components";

const Rodape = styled.footer`
  width: 100%;
  padding: 20px 10px;
  margin-top: 40px;
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.rosaClaro};
  border-top: 1px solid ${({ theme }) => theme.colors.vinho};
`;

export default function Footer() {
  return (
    <Rodape>
      © {new Date().getFullYear()} Voz & Alma Mensagens — Criando emoções em áudio.
    </Rodape>
  );
}
