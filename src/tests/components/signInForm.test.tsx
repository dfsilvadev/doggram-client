import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { Form, SignInForm } from "@/components";

import { endpoint } from "@/utils/common/constant/endpoints";

describe("SignInForm", () => {
  it("should render currectly", () => {
    renderWithTheme(
      <Form title="Sign in" aria-label="sign in form">
        <SignInForm />
      </Form>,
      { wrapper: BrowserRouter }
    );

    expect(
      screen.getByRole("form", { name: /sign in form/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Sign in/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/form group/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Entrar" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Entrar" })).toHaveAttribute(
      "type",
      "submit"
    );

    expect(screen.getByText("Não possui conta?")).toBeInTheDocument();

    expect(screen.getByRole("link")).toHaveAttribute("href", endpoint.SIGNUP);
  });
});
