import React from "react";
import "./style.css";

const StatBox = ({ title, stats }) => {
  const styles = {
    text: {}
  };
  return (
    <>
      <div>{title}</div>
      {stats &&
        stats.map(({ statName, value }) => {
          return (
            <div>
              {statName}: {value}
            </div>
          );
        })}
    </>
  );
};

export default StatBox;

// <div>Nationalities: 34</div>
// <div>Gold medal winners: 12</div>
// <div>Silver medal Winners: 14</div>
