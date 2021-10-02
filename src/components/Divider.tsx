import React from "react";
import styled from "styled-components";

interface args {
  text: string;
}

const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  margin: 0.25rem;
  max-height: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 5rem;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0.25rem;
  &:last-child {
    ${Line}:last-child {
      display: none;
    }
  }
`;

export const Divider = ({ text }: args) => (
  <Container>
    <Line />
    <div>{text}</div>
    <Line />
  </Container>
);
