import React from "react";
import "./style.css";

const Section = ({ theme, duo, ...children }) => {
  const styles = {
    Page: {
      display: "flex",
      flexDirection: duo && "column",
      margin: 20,
      padding: 10,
      marginTop: 0,
      backgroundColor: theme === "light" ? "lightGrey" : "#8ABBAE",
      borderRadius: 6,
      height: "fit-content"
    }
  };
  return <div style={styles.Page} {...children} />;
};

export default Section;
