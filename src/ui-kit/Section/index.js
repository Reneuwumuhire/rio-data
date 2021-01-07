import React from "react";
import "./style.css";

const Section = ({ theme, col, spaced, ...children }) => {
  const styles = {
    Page: {
      display: "flex",
      flexDirection: col && "column",
      margin: 20,
      padding: 10,
      marginTop: 0,
      backgroundColor: theme === "light" ? "lightGrey" : "#8ABBAE",
      borderRadius: 6,
      height: "fit-content",
      justifyContent: spaced && "space-between"
    }
  };
  return <div style={styles.Page} {...children} />;
};

export default Section;
