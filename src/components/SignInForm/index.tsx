import { Link } from "react-router-dom";
import { EnvelopeSimple, Lock } from "phosphor-react";

import { Button, Input } from "@/components";

import { ENDPOINT } from "@/utils/common/constant/endpoints";

import * as S from "./styles";

const SignInForm = () => {
  return (
    <S.SignInFormGroup aria-label="form group">
      <Input name="email" placeholder="E-mail" icon={<EnvelopeSimple />} />
      <Input name="password" placeholder="Senha" icon={<Lock />} />

      <Button type="submit" fullWidth>
        Entrar
      </Button>

      <p>
        Não possui conta?
        <Link to={ENDPOINT.SIGNUP}>Faça seu cadastro agora!</Link>
      </p>
    </S.SignInFormGroup>
  );
};

export default SignInForm;
