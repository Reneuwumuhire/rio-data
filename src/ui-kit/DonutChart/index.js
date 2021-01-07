import React from "react";
import "./style.css";
import DonutChart from "react-donut-chart";

const DChart = ({ data }) => {
  return (
    <div
      style={{
        border: "solid 2px #2F856E",
        height: "fit-content",
        width: "fit-content",
        marginTop: 10,
        marginRight: 10
      }}
    >
      <DonutChart
        height={270}
        width={280}
        legend={false}
        innerRadius={0.7}
        data={data}
        colors={["#006A4E"]}
      />
    </div>
  );
};

export default DChart;
