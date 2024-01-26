import { ForwardRefRenderFunction, forwardRef } from "react";

import * as S from "./styles";

import { TextFieldProps } from "./types";

const Input: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  {
    label,
    icon,
    name,
    iconPosition = "left",
    disabled = false,
    error,
    ...props
  },
  ref
) => {
  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
          ref={ref}
        />
      </S.InputWrapper>
      {!!error && <S.ErrorMsg>{error}</S.ErrorMsg>}
    </S.Wrapper>
  );
};

export default forwardRef(Input);
