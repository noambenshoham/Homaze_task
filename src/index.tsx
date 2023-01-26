import App from "./App";
import "./styles/index.css";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./Redux/Store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
