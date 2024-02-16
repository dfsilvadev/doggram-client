import styled, { css } from "styled-components";

type ItemProps = {
  height: number;
};

export const Item = styled.div<ItemProps>`
  ${({ height }) => css`
    height: ${`${height}px`};
    position: relative;
    overflow: hidden;

    &:hover ${Overlay} {
      opacity: 1;
    }
  `}
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.span`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    inset: 0;
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
    transition: all 0.15s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
  `}
`;
