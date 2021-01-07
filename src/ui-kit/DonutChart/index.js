import React from "react";
import "./style.css";
import DonutChart from "react-donut-chart";

const DChart = ({ data }) => {
  return (
    <div
      style={{
        border: "solid 2px grey",
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
      />
    </div>
  );
};

export default DChart;
