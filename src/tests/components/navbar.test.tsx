import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { Navbar } from "@/components";

import { ROUTES } from "@/utils/common/constant/routes";

describe("Navbar", () => {
  it("render currectly", () => {
    const { container } = renderWithTheme(<Navbar />, {
      wrapper: BrowserRouter
    });

    expect(container).toMatchSnapshot();
  });

  it("render the logo", () => {
    renderWithTheme(<Navbar />, {
      wrapper: BrowserRouter
    });

    expect(
      screen.getByRole("img", { name: /logotipo petsgram/i })
    ).toBeInTheDocument();
  });

  it("render a search input", () => {
    renderWithTheme(<Navbar />, {
      wrapper: BrowserRouter
    });

    expect(
      screen.getByRole("search", { name: /search photo/i })
    ).toBeInTheDocument();
  });

  it("render a link to the home page", () => {
    renderWithTheme(<Navbar />, {
      wrapper: BrowserRouter
    });

    expect(
      screen.getByRole("link", { name: /home link/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /home link/i })).toHaveAttribute(
      "href",
      ROUTES.HOME
    );
  });
});
