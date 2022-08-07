import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <DefaultLayout />
      </Provider>
    </div>
  );
}

export default App;
