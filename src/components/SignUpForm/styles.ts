import styled, { css } from "styled-components";

export const SignUpFormGroup = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 1rem;

    p {
      text-align: right;

      a {
        color: ${theme.colors.purple400};
        font-weight: ${theme.font.weight.bold};
      }
    }
  `}
`;
