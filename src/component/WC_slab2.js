import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useDispatch, useSelector } from "react-redux";
import { loadChart, loadChart2 } from "../reducer/chart";
import WC_slab1 from "./WC_slab1";

const WC_slab2 = (props) => {
  const dispatch = useDispatch();

  const time = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.time)
  );
  const WC_slab2 = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.WC_slab2)
  );

  const ex = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => [el.time, el.WC_slab2])
  );

  console.log("time", ex);
  useEffect(() => {
    dispatch(loadChart());
    // dispatch(loadChart2());
  }, []);
  const options = {
    chart: {
      zoomType: "x", // bar차트. 아무 설정이 없으면 line chart가 된다.
    },
    title: {
      text: "WC_slab2",
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
    series: [{ name: "data", data: WC_slab2 }],
  };
  return (
    <form>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </form>
  );
};

export default WC_slab2;
