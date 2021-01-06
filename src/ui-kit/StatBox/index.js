import React from "react";
import "./style.css";

const StatBox = ({ title, stats, valColor }) => {
  const styles = {
    container: {
      border: "solid 1px #2F856E",
      display: "flex",
      flexDirection: "column",
      padding: 20,
      margin: 10,
      height: "fit-content",
      width: "fit-content",
      borderRadius: 4
    },
    title: {
      color: "#003300",
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10
    },
    stat: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      color: "#003300",
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 10
    },
    statValue: { marginLeft: 10, color: valColor && valColor }
  };
  return (
    <div style={styles.container}>
      <div style={styles.title}>{title}</div>
      {stats &&
        stats.map(({ statName, value }) => {
          return (
            <div style={styles.stat}>
              <div>{statName}:</div>
              <div style={styles.statValue}>{value}</div>
            </div>
          );
        })}
    </div>
  );
};

export default StatBox;

// <div>Nationalities: 34</div>
// <div>Gold medal winners: 12</div>
// <div>Silver medal Winners: 14</div>
