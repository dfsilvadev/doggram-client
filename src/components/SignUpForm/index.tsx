import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { EnvelopeSimple, Lock, User } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Form, Input } from "@/components";

import { useAppSelector } from "@/hooks/useAppSelector";

import { register, reset } from "@/slices/authSlice";

import { ROUTES } from "@/utils/common/constant/routes";

import * as S from "./styles";

const signUpFormSchema = z
  .object({
    name: z
      .string()
      .min(5, { message: "O nome de usuário precisa ter no mínumo 5 letras" }),
    email: z.string().email("Este e-mail não é válido."),
    password: z
      .string()
      .min(6, { message: "A senha deve conter um mínimo de 6 letras" }),
    confirm_password: z
      .string()
      .min(6, { message: "A senha deve conter um mínimo de 6 letras" })
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não correspondem.",
        path: ["confirm_password"]
      });
    }
  });

type RegisterFormData = z.infer<typeof signUpFormSchema>;

const SignUpForm = () => {
  const {
    register: zRegister,
    handleSubmit,
    reset: zReset,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(signUpFormSchema)
  });

  const dispatch = useDispatch();
  const { error, success } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handelRegister = (data: RegisterFormData) => {
    dispatch(register(data));
    zReset();
  };

  useEffect(() => {
    if (success) {
      toast.success("Usuário cadastrado com sucesso.");
      navigate(ROUTES.SIGNIN);
    }
  }, [navigate, success]);

  useEffect(() => {
    if (error && typeof error === "string") {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    dispatch(reset());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <Form onSubmit={handleSubmit(handelRegister)} aria-label="sign up form">
      <S.SignUpFormGroup aria-label="form group">
        <Input
          placeholder="Nome completo"
          disabled={isSubmitting}
          icon={<User size={18} weight="bold" />}
          {...zRegister("name")}
          error={errors.name && errors.name.message}
        />
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
        <Input
          type="password"
          placeholder="Confirmar senha"
          disabled={isSubmitting}
          icon={<Lock size={18} weight="bold" />}
          {...zRegister("confirm_password")}
          error={errors.confirm_password && errors.confirm_password.message}
        />

        <Button
          type="submit"
          fullWidth
          disabled={isSubmitting}
          loading={isSubmitting}
        >
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
