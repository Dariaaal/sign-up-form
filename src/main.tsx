import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import store from "./store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>
);
