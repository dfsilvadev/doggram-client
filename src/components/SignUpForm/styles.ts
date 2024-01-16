import styled, { css } from "styled-components";

export const SignUpFormGroup = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 1rem;

    p,
    p > a {
      font-size: ${theme.font.sizes.small};
    }

    p {
      text-align: right;

      a {
        color: ${theme.colors.purple400};
        font-weight: ${theme.font.weight.bold};
        padding-left: 0.5rem;
      }
    }
  `}
`;
