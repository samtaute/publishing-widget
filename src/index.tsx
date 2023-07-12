import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SoftboxContextProvider } from "./store/softbox-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <SoftboxContextProvider>
    <App />
  </SoftboxContextProvider>
);
