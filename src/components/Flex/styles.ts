import styled, { css } from "styled-components";

import { FlexType } from "./types";

export const FlexContent = styled.div.withConfig({
  shouldForwardProp: (props) => !["align"].includes(props)
})<FlexType>`
  ${({ display, direction, align, justify, content, wrap, gap }) => css`
    display: ${display};
    flex-direction: ${direction};
    align-items: ${align};
    align-content: ${content};
    justify-content: ${justify};
    flex-wrap: ${wrap};
    gap: ${gap};
  `}
`;
