import styled, { css } from "styled-components";

import { Container } from "@/components";
import { Wrapper as Button } from "@/components/Button/styles";

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 5rem;
    background-color: ${theme.colors.white};
    border-bottom: 1px solid #f2f3f5;

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
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;

  img {
    width: 100%;
    block-size: cover;
  }
`;

export const Nav = styled.nav``;

export const NewPostButton = styled(Button)`
  color: inherit;

  &:hover {
    color: inherit;
  }
`;
