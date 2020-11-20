import React from "react";
import { Provider } from "react-redux";
import Chart from "./page/Chart";
import configureStore from "./store/configureStore";

export default function App() {
  return (
    <Provider store={configureStore}>
      <Chart />
    </Provider>
  );
}
