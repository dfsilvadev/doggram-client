import * as S from "./styles";

import { FormProps } from "./types";

const Form = ({ children, title, ...props }: FormProps) => {
  return (
    <S.FormWrapper {...props}>
      <S.FormHeader>
        <S.FormTitle>{!!title && title}</S.FormTitle>
      </S.FormHeader>

      {children}
    </S.FormWrapper>
  );
};

export default Form;
