import { ReactNode } from "react";
import { Provider } from "react-redux";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { DefaultTheme } from "@/styles";

import { store } from "@/store";

const renderWithTheme = (
  children: ReactNode,
  options?: RenderOptions
): RenderResult =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
    </Provider>,
    options
  );

export default renderWithTheme;
