import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { DefaultRoutes } from "@/routes";

import { endpoint } from "@/utils/common/constant/endpoints";

describe("DefaultRoutes", () => {
  it("renders Home route correctly", () => {
    const rota = endpoint.HOME;
    render(
      <MemoryRouter initialEntries={[rota]}>
        <DefaultRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders Sign in route correctly", () => {
    const rota = endpoint.SIGNIN;
    render(
      <MemoryRouter initialEntries={[rota]}>
        <DefaultRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Sign in")).toBeInTheDocument();
  });

  it("renders Sign up route correctly", () => {
    const rota = endpoint.SIGNUP;
    render(
      <MemoryRouter initialEntries={[rota]}>
        <DefaultRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Sign up")).toBeInTheDocument();
  });

  it("renders Profile route correctly", () => {
    const rota = endpoint.PROFILE.HOME;
    render(
      <MemoryRouter initialEntries={[rota]}>
        <DefaultRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  it("renders Profile / Edit route correctly", () => {
    const rota = endpoint.PROFILE.EDIT;
    render(
      <MemoryRouter initialEntries={[rota]}>
        <DefaultRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Profile / Edit")).toBeInTheDocument();
  });
});
