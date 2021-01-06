import React from "react";
import "./style.css";

const Section = ({ theme, ...children }) => {
  const styles = {
    Page: {
      display: "flex",
      flex: 1,
      minWidth: "100vw",
      backgroundColor: theme === "light" ? "lightGrey" : "#648c11"
    }
  };
  return <div style={styles.Page} {...children} />;
};

export default Section;
