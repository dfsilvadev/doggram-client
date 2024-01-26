import { forwardRef, ForwardRefRenderFunction } from "react";

import * as S from "./styles";

import { ButtonProps, WrapperStyleProps } from "./types";

const Button: ForwardRefRenderFunction<WrapperStyleProps, ButtonProps> = (
  {
    children,
    size = "medium",
    fullWidth = false,
    ghost = false,
    minimal = false,
    loading = false,
    icon,
    ...props
  },
  ref
) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      ghost={ghost}
      ref={ref}
      {...props}
    >
      {loading ? (
        <S.Loader />
      ) : (
        <>
          {!!icon && icon}
          {!!children && <span>{children}</span>}
        </>
      )}
    </S.Wrapper>
  );
};

export default forwardRef(Button);
