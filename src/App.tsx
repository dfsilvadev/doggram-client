import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { DefaultRoutes } from "@/routes";

import { store } from "@/store";

import { DefaultTheme, GlobalStyles } from "@/styles";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={DefaultTheme}>
          <GlobalStyles />
          <DefaultRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
