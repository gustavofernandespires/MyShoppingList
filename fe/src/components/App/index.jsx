import { ThemeProvider } from "styled-components";

import GlobalStyle from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";

import AppRoutes from "../../Routes";

import Header from "../Header";

import { Container } from "./styles";
import ToastContainer from "../Toasts/ToastContainer";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToastContainer />
      <Container>
        <Header />
        <AppRoutes />
      </Container>
    </ThemeProvider>
  );
}

export default App;
