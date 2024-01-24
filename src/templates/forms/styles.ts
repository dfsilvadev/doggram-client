import styled, { css } from "styled-components";

import { Logo } from "@/components/Navbar/styles";
import { Flex } from "@/components";

export const Content = styled(Flex)`
  height: 100vh;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 1fr 2fr;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;

export const LogoContent = styled(Logo)``;

export const Box = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.purple300};
    background-color: ${theme.colors.white};
    width: 100%;
    max-width: 470px;
    padding: 2rem;
    border-radius: 1rem;
  `}
`;
