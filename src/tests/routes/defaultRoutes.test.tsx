import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithTheme } from "@/utils/tests";

import { DefaultRoutes } from "@/routes";

import { ROUTES } from "@/utils/common/constant/routes";

describe("DefaultRoutes", () => {
  it("renders Home route correctly", () => {
    const rota = ROUTES.HOME;
    renderWithTheme(
      <MemoryRouter initialEntries={[rota]}>
        <DefaultRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders Sign in route correctly", () => {
    const rota = ROUTES.SIGNIN;
    renderWithTheme(
      <MemoryRouter initialEntries={[rota]}>
        <DefaultRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Faça seu cadastro agora!")).toBeInTheDocument();
  });

  it("renders Sign up route correctly", () => {
    const rota = ROUTES.SIGNUP;
    renderWithTheme(
      <MemoryRouter initialEntries={[rota]}>
        <DefaultRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Faça seu login agora!")).toBeInTheDocument();
  });

  it("renders Profile route correctly", () => {
    const rota = ROUTES.PROFILE.HOME;
    renderWithTheme(
      <MemoryRouter initialEntries={[rota]}>
        <DefaultRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  it("renders Profile / Edit route correctly", () => {
    const rota = ROUTES.PROFILE.EDIT;
    renderWithTheme(
      <MemoryRouter initialEntries={[rota]}>
        <DefaultRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Profile / Edit")).toBeInTheDocument();
  });
});
