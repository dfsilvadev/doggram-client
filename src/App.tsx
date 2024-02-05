import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { DefaultRoutes } from "@/routes";

import { store } from "@/store";

import { DefaultTheme, GlobalStyles } from "@/styles";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={DefaultTheme}>
          <GlobalStyles />
          <ToastContainer
            autoClose={3000}
            theme="colored"
            icon={false}
            position="bottom-right"
          />
          <DefaultRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
