import styled, { css } from "styled-components";

const Box = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 1.5rem;
  `}
`;

export default Box;
