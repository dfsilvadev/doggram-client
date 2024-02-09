import styled, { css } from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Image = styled.img`
  box-sizing: initial;
  width: 100%;
  object-fit: contain;
`;

export const Picture = styled.picture`
  ${({ theme }) => css`
    background: ${theme.colors.purple400};
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    overflow: hidden;

    border: 1px solid ${theme.colors.gray50};
    outline: 2px solid ${theme.colors.gray800};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  ${({ theme }) => css`
    min-width: 13.75rem;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray100};
    border-radius: 0.5rem;
    padding: 0.3125rem;
    box-shadow: 0 0.625rem 2.375rem -0.625rem rgba(22, 23, 24, 0.35),
      0 0.625 1.25rem -1rem rgba(22, 23, 24, 0.2);
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  `}
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  ${({ theme }) => css`
    height: 1.5625rem;
    border-radius: 3px;
    padding: 0 0.3125rem;
    padding-left: 1.5625rem;
    position: relative;
    user-select: none;
    outline: none;
    color: ${theme.colors.purple300};
    font-weight: ${theme.font.weight.bold};

    &,
    a,
    button {
      font-size: 0.8125rem;
      line-height: 1;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    & > button {
      background: none;
      border: none;
      outline: none;
      color: inherit;
      font-weight: inherit;
    }

    &[data-disabled] {
      color: ${theme.colors.gray50};
      pointer-events: none;
    }

    &[data-highlighted] {
      background-color: ${theme.colors.purple800};
      color: ${theme.colors.gray50};
    }
  `}
`;

export const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  ${({ theme }) => css`
    height: 1px;
    background-color: ${theme.colors.purple300};
    margin: 0.3125rem;
  `}
`;

export const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
  ${({ theme }) => css`
    fill: ${theme.colors.white};
  `}
`;
