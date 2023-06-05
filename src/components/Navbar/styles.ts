import styled, { css } from "styled-components";

import { Container } from "@/components";
import { Wrapper as Button } from "@/components/Button/styles";

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 5rem;
    background-color: ${theme.colors.white};

    display: flex;
    align-items: center;
  `}
`;

export const Content = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.span`
  width: 3.75rem;
  height: 3.75rem;

  display: flex;
  align-items: center;

  img {
    width: 100%;
    block-size: cover;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const NewPostButton = styled(Button)`
  color: inherit;

  &:hover {
    color: inherit;
  }
`;
