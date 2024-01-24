import styled, { css } from "styled-components";

export const FormWrapper = styled.form`
  ${({ theme }) => css`
    width: min(30rem, 100%);
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.purple400};
    border-radius: 0.5rem;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  `}
`;

export const FormHeader = styled.header`
  display: grid;
  place-items: center;
`;

export const FormTitle = styled.h2`
  text-transform: uppercase;
`;
