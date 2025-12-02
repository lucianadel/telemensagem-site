import styled from "styled-components";

const Btn = styled.button`
  background: ${({ theme }) => theme.gradientes.romantico};
  color: white;
  padding: 12px 28px;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: ${({ theme }) => theme.sombras.brilho};
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.sombras.leve};
  }
`;

export default function Button({ children, onClick }) {
  return <Btn onClick={onClick}>{children}</Btn>;
}
