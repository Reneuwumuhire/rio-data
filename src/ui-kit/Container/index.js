import React from "react";
import "./style.css";

const Container = ({ theme, ...children }) => {
  const styles = {
    container: {
      display: "flex",
      backgroundColor: "white" || "#282c34",
      minHeight: "100vh",
      minWidth: "100vw"
    }
  };
  return <div style={styles.container} {...children} />;
};

export default Container;
