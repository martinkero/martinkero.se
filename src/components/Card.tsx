import React from "react";
import styled from "styled-components";

interface args {
  header: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  headerFontSize?: string;
}

const StyledCard = styled.section`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.gray};
  a {
    color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.blueLight};
    padding: 0.6rem;
  }
  a:hover {
    transform: scale(1.05);
  }
`;

const Header = styled.header<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.medium};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

export const Card = ({ header, content, footer, headerFontSize }: args) => (
  <StyledCard>
    <Header fontSize={headerFontSize}>{header}</Header>
    {content}
    {footer && <Footer>{footer}</Footer>}
  </StyledCard>
);
