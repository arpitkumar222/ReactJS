import React from "react";
import "./App.css";
import Render from "./comp/render";

import { Provider } from "react-redux";
import store from "./redux/userStore";
function App() {
  console.log("app.js ...", store);
  return (
    <Provider store={store}>
      {}
      <div className="App">
        <header>
          <Render />
        </header>
      </div>
    </Provider>
  );
}

export default App;
