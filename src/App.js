import React from "react";
import { Provider } from "react-redux";
import Chart from ".page/Chart";
import configurestore from "./store/configurestore";

export default function App() {
  return (
    <Provider store={configurestore}>
      <Chart />
    </Provider>
  );
}
