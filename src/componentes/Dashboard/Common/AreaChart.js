import React from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
  const options = {
    chart: {
      id: "spline-area-chart",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1", "#FFC085"],
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
  };

  const series = [
    {
      name: "Series 1",
      data: [30, 40, 25, 50, 49, 21, 70, 51, 42, 60, 55, 40],
    },
    {
      name: "Series 2",
      data: [10, 20, 35, 30, 25, 45, 55, 40, 60, 50, 35, 15],
    },
  ];

  return (
    <div className="spline-area-chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default AreaChart;
