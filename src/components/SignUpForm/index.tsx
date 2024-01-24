import { FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { EnvelopeSimple, Lock, User } from "phosphor-react";

import { useDispatch } from "react-redux";

import { Button, Form, Input } from "@/components";

import { useAppSelector } from "@/hooks/useAppSelector";

import { register, reset } from "@/slices/authSlice";

import { ROUTES } from "@/utils/common/constant/routes";

import * as S from "./styles";

const SignUpForm = () => {
  const dispatch = useDispatch();

  // const { loading, error } = useAppSelector((state) => state.auth);
  useAppSelector((state) => state.auth);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const user = {
      name: "Fulado da Silva",
      email: "fulaninho@email.com",
      password: "#.su2024.#",
      confirm_password: "#.su2024.#"
    };

    dispatch(register(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <Form onSubmit={handleSubmit} aria-label="sign up form" title="Sign un">
      <S.SignUpFormGroup aria-label="form group">
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
          <Link to={ROUTES.SIGNIN}>Faça seu login agora!</Link>
        </p>
      </S.SignUpFormGroup>
    </Form>
  );
};

export default SignUpForm;
