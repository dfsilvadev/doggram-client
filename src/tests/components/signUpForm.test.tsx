import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { Form, SignUpForm } from "@/components";

describe("SignUpForm", () => {
  it("should render currectly", () => {
    renderWithTheme(
      <Form title="Sign up" aria-label="sign up form">
        <SignUpForm />
      </Form>
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
  });
});
