import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useDispatch, useSelector } from "react-redux";
import { loadChart } from "../reducer/chart";

const HighChart = (props) => {
  const dispatch = useDispatch();
  const series2 = useSelector((state) => state?.chart[0]);
  console.log("highchart", series2);

  const database = [];

  const time = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.time)
  );
  const EC_drain_PC = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.EC_drain_PC)
  );
  const EC_slab1 = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.EC_slab1)
  );
  const EC_slab2 = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.EC_slab2)
  );
  const WC_slab1 = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.WC_slab1)
  );
  const WC_slab2 = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.WC_slab2)
  );
  const CO2air = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.CO2air)
  );
  const HumDef = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.HumDef)
  );
  const Rhair = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.Rhair)
  );
  const Tair = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.Tair)
  );
  const EnScr = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.EnScr)
  );
  const BlackScr = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.BlackScr)
  );
  const Iglob = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.Iglob)
  );
  const RadSum = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.RadSum)
  );
  const PipeGrow = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.PipeGrow)
  );
  const PipeLow = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.PipeLow)
  );
  const Tout = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => el.Tout)
  );

  const ex = useSelector((state) =>
    state.chart[0]?.dataset.map((el) => [
      el.time.charCodeAt(0).toString(16),
      el.EC_drain_PC,
    ])
  );

  console.log("time", ex);
  useEffect(() => {
    dispatch(loadChart());
  }, []);
  const options = {
    chart: {
      zoomType: "x", // bar차트. 아무 설정이 없으면 line chart가 된다.
    },
    title: {
      text: "chart",
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
        text: "score",
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
    series: [{ name: "data", data: ex }],
  };
  return (
    <form>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </form>
  );
};

export default HighChart;
