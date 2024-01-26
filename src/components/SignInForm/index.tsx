import { Link } from "react-router-dom";
import { EnvelopeSimple, Lock } from "phosphor-react";

import { Button, Form, Input } from "@/components";

import { ROUTES } from "@/utils/common/constant/routes";

import * as S from "./styles";

const SignInForm = () => {
  return (
    <Form aria-label="sign in form">
      <S.SignInFormGroup aria-label="form group">
        <Input name="email" placeholder="E-mail" icon={<EnvelopeSimple />} />
        <Input name="password" placeholder="Senha" icon={<Lock />} />

        <Button type="submit" fullWidth>
          Entrar
        </Button>

        <p>
          Não possui conta?
          <Link to={ROUTES.SIGNUP}>Faça seu cadastro agora!</Link>
        </p>
      </S.SignInFormGroup>
    </Form>
  );
};

export default SignInForm;
