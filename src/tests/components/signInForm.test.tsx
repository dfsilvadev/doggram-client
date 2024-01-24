import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { SignInForm } from "@/components";

import { ROUTES } from "@/utils/common/constant/routes";

describe("SignInForm", () => {
  it("should render currectly", () => {
    renderWithTheme(<SignInForm />, { wrapper: BrowserRouter });

    expect(
      screen.getByRole("form", { name: /sign in form/i })
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

    expect(screen.getByRole("link")).toHaveAttribute("href", ROUTES.SIGNUP);
  });
});
