import React from "react";
import "./style.css";

const Section = ({ theme, ...children }) => {
  const styles = {
    Page: {
      display: "flex",
      flex: 1,
      margin: 20,
      padding: 10,
      marginTop: 0,
      backgroundColor: theme === "light" ? "lightGrey" : "#8ABBAE",
      borderRadius: 6
    }
  };
  return <div style={styles.Page} {...children} />;
};

export default Section;
