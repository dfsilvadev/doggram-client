import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { Form, SignUpForm } from "@/components";

import { endpoint } from "@/utils/common/constant/endpoints";

describe("SignUpForm", () => {
  it("should render currectly", () => {
    renderWithTheme(
      <Form title="Sign up" aria-label="sign up form">
        <SignUpForm />
      </Form>,
      { wrapper: BrowserRouter }
    );

    expect(
      screen.getByRole("form", { name: /sign up form/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Sign up/i })
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/nome completo/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/confirmar senha/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Cadastrar" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cadastrar" })).toHaveAttribute(
      "type",
      "submit"
    );

    expect(screen.getByText("Já possui uma conta?")).toBeInTheDocument();

    expect(screen.getByRole("link")).toHaveAttribute("href", endpoint.SIGNIN);
  });
});
