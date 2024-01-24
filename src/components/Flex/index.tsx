import { ForwardRefRenderFunction, forwardRef } from "react";

import * as S from "./styles";

import { IFlexProps } from "./types";

const Flex: ForwardRefRenderFunction<HTMLDivElement, IFlexProps> = (
  {
    children,
    display = "flex",
    direction = "row",
    align = "flex-start",
    justify = "flex-start",
    content = "stretch",
    wrap = "wrap",
    gap = "0",
    ...props
  },
  ref
) => {
  return (
    <S.FlexContent
      ref={ref}
      display={display}
      direction={direction}
      align={align}
      justify={justify}
      content={content}
      wrap={wrap}
      gap={gap}
      {...props}
    >
      {children}
    </S.FlexContent>
  );
};

export const FlexComponent = forwardRef(Flex);
