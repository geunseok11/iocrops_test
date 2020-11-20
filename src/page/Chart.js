import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadChart } from "../reducer/chart";
import HighChart from "../component/HighChart";

const Chart = (props) => {
  const dispatch = useDispatch();
  const chartList = useSelector((state) => state?.chart);
  console.log("chartList", chartList);

  const [chart, setChart] = useState("");

  useEffect(() => {
    dispatch(loadChart());
  }, []);

  return (
    <React.Fragment>
      <button onClick={() => setChart(false)}>dd</button>
      <HighChart chart={true} />
    </React.Fragment>
  );
};

export default Chart;
