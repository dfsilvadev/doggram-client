import styled, { css, DefaultTheme } from "styled-components";

import { TextFieldProps } from "./types";

type WrapperProps = Pick<TextFieldProps, "disabled"> & { error?: boolean };

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red500};
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.red500};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray800};

      &::placeholder {
        color: currentColor;
      }
    }
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: ${theme.colors.gray50};
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    border: 2px solid transparent;
    transition: 0.1s ease-in-out;

    &:focus-within {
      border: 2px solid ${theme.colors.purple400};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.gray800};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: 0.75rem 0;
    background: transparent;
    border: 2px solid transparent;
    outline: none;
    width: 100%;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray800};
    font-weight: ${theme.font.weight.medium};
    cursor: pointer;
  `}
`;

type IconPositionProps = Pick<TextFieldProps, "iconPosition">;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: fit-content;
    color: ${theme.colors.gray800};
    order: ${iconPosition === "right" ? 1 : 0};

    & > svg {
      width: fit-content;
      font-size: 1.4rem;
      line-height: 0;
    }

    ${InputWrapper}:focus-within & {
      color: ${theme.colors.purple400};
    }
  `}
`;

export const ErrorMsg = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red500};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.medium};
  `}
`;
