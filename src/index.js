import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/themes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
