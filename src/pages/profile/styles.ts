import styled, { css } from "styled-components";

export const ImageWrap = styled.div`
  flex-grow: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 7.5rem;
  border-radius: 3px;
`;

export const UserInfo = styled.div`
  ${({ theme }) => css`
    span {
      font-weight: 500;
    }

    p {
      font-size: ${theme.font.sizes.small};
      max-width: 64ch;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    }
  `}
`;

export const GridWrap = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.3125rem;
`;
