import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { Avatar } from "@/components";

const props = {
  src: "https://avatars.githubusercontent.com/u/16245261?v=4",
  alt: "Foto - Daniel Silva",
  title: "Foto - Daniel Silva"
};

describe("Avatar", () => {
  it("should render currectly", () => {
    renderWithTheme(<Avatar {...props} />, { wrapper: BrowserRouter });

    expect(screen.getByRole("img", { name: /avatar/i })).toBeInTheDocument();
  });
});
