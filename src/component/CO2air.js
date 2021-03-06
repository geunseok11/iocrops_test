import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useDispatch, useSelector } from "react-redux";
import { loadChart, loadChart2 } from "../reducer/chart";

const CO2air = (props) => {
  const dispatch = useDispatch();
  const series2 = useSelector((state) => state?.chart[0]);

  const time = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.time)
  );
  const CO2air = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.CO2air)
  );

  const ex = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => [el.time, el.CO2air])
  );

  useEffect(() => {
    dispatch(loadChart());
    // dispatch(loadChart2());
  }, []);
  const options = {
    chart: {
      zoomType: "x", // bar차트. 아무 설정이 없으면 line chart가 된다.
    },
    title: {
      text: "CO2air",
    },
    subtitle: {
      text:
        document.ontouchstart === undefined
          ? "Click and drag in the plot area to zoom in"
          : "Pinch the chart to zoom in",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0)
                .get("rgba"),
            ],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },
    series: [{ name: "data", data: CO2air }],
  };
  return (
    <form>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </form>
  );
};

export default CO2air;
