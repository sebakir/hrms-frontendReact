import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./redux/redurcers"
import { createStore } from "redux";
import App from "./layouts/App";
import { Provider } from "react-redux";
import 'semantic-ui-css/semantic.min.css'

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>,
  rootElement
);
