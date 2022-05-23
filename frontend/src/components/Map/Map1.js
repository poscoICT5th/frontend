import React from "react";
import Chart from "react-apexcharts";

function Map1() {
  const generateData = (count, yrange) => {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  };

  const tempData = [{ x: "x1", y: "y1", product: { a: 1, b: 2 } }];

  const series = [
    {
      name: "A", // 컨테이너이름
      data: [{ x: 1, y: 10 }], // x:
    },
    {

      name: "B",
      data: generateData(18, { min: 0, max: 90, }),
    },
    {
      name: "C",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "D",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "E01",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "E02",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "F",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "G",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "H",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
  ];

  const options1 = {
    chart: {
      height: 350,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#000000"],
    title: {
      text: "HeatMap Chart (Single color)",
    },
  };
  return (
    <div id="chart">
      <Chart options={options1} series={series} type="heatmap" height={350} />
    </div>
  );
}

export default Map1;
