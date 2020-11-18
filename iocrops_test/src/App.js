import React from "react";
import { Provider } from "react-redux";
import Chart from ".page/Chart";

export default function App() {
  return (
    <Provider>
      <Chart />
    </Provider>
  );
}
