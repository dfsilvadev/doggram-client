import { EnvelopeSimple, Lock, User } from "phosphor-react";

import { Button, Input } from "@/components";

import { endpoint } from "@/utils/common/constant/endpoints";

import * as S from "./styles";

const SignUpForm = () => {
  return (
    <S.SignUpFormGroup>
      <Input name="name" placeholder="Nome completo" icon={<User />} />
      <Input name="email" placeholder="E-mail" icon={<EnvelopeSimple />} />
      <Input name="password" placeholder="Senha" icon={<Lock />} />
      <Input
        name="confirm-password"
        placeholder="Confirmar senha"
        icon={<Lock />}
      />

      <Button type="submit" fullWidth>
        Cadastrar
      </Button>

      <p>
        Já possui uma conta?
        <Button as="a" href={endpoint.SIGNIN} minimal>
          Faça seu login agora!
        </Button>
      </p>
    </S.SignUpFormGroup>
  );
};

export default SignUpForm;
