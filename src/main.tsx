import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Modal from "./components/Modal/index.tsx";
import { ModalContextProvider } from "./contexts/ModalContext.tsx";
import { FiltersContextProvider } from "./contexts/FiltersContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalContextProvider>
      <FiltersContextProvider>
        <Modal />
        <App />
      </FiltersContextProvider>
    </ModalContextProvider>
  </React.StrictMode>,
);
