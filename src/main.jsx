import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reduc";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);