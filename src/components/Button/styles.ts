import styled, { css, DefaultTheme } from "styled-components";

import { WrapperStyleProps } from "./types";

const wrapperModifiers = {
  small: () => css`
    height: 2.5rem;
    font-size: 0.875rem;
  `,
  medium: () => css`
    height: 3.125rem;
    padding: 1rem;
    font-size: 1rem;
  `,
  large: () => css`
    height: 3.3125rem;
    padding: 1rem 1.5rem;
    font-size: 1rem;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: 0.5rem;
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.gray800};
    padding: 0;

    &:hover {
      background: none;
      color: ${theme.colors.purple400};
    }
  `,
  ghost: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.purple500};
    border: 2px solid ${theme.colors.purple500};

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.purple800};
      border: 2px solid ${theme.colors.purple800};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
};

export const Wrapper = styled.button<WrapperStyleProps>`
  ${({ theme, size, fullWidth, minimal, ghost, hasIcon, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.purple500};
    color: ${theme.colors.white};
    border: 0;
    border-radius: 0.5rem;
    padding: 1rem;

    &:hover {
      background: ${theme.colors.purple800};
    }

    ${!!size && wrapperModifiers[size]()}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${!!ghost && wrapperModifiers.ghost(theme)}
    ${!!hasIcon && wrapperModifiers.withIcon()}
    ${!!disabled && wrapperModifiers.disabled}
  `}
`;

export const Loader = styled.div`
  ${({ theme }) => css`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: relative;
    animation: rotate 0.6s linear infinite;

    &::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 2px solid ${theme.colors.white};
      animation: prixClipFix 2s linear infinite;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes prixClipFix {
      0% {
        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
      }
      25% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
      }
      50% {
        clip-path: polygon(
          50% 50%,
          0 0,
          100% 0,
          100% 100%,
          100% 100%,
          100% 100%
        );
      }
      75% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
      }
      100% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
      }
    }
  `}
`;
