import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EnvelopeSimple, Lock } from "phosphor-react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Form, Input } from "@/components";

import { useAppSelector } from "@/hooks";

import { login, reset } from "@/slices/authSlice";

import { ROUTES } from "@/utils/common/constant/routes";

import * as S from "./styles";

const signInFormSchema = z.object({
  email: z.string().email("Este e-mail não é válido."),
  password: z
    .string()
    .min(6, { message: "A senha deve conter um mínimo de 6 letras" })
});

export type LoginFormData = z.infer<typeof signInFormSchema>;

const SignInForm = () => {
  const {
    register: zRegister,
    handleSubmit,
    reset: zReset,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    resolver: zodResolver(signInFormSchema)
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { error, success } = useAppSelector((state) => state.auth);

  const handelLogin = (data: LoginFormData) => {
    dispatch(login(data));
    zReset();
  };

  useEffect(() => {
    if (success) {
      navigate(ROUTES.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  useEffect(() => {
    if (error && typeof error === "string") {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <Form onSubmit={handleSubmit(handelLogin)} aria-label="sign in form">
      <S.SignInFormGroup aria-label="form group">
        <Input
          placeholder="E-mail"
          disabled={isSubmitting}
          icon={<EnvelopeSimple size={18} weight="bold" />}
          {...zRegister("email")}
          error={errors.email && errors.email.message}
        />
        <Input
          type="password"
          placeholder="Senha"
          disabled={isSubmitting}
          icon={<Lock size={18} weight="bold" />}
          {...zRegister("password")}
          error={errors.password && errors.password.message}
        />

        <Button
          type="submit"
          fullWidth
          disabled={isSubmitting}
          loading={isSubmitting}
        >
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
