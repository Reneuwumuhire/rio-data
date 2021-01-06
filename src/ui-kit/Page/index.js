import React from "react";
import "./style.css";

const Page = ({ theme, ...children }) => {
  const styles = {
    Page: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white" || "#282c34",
      minHeight: "100vh",
      minWidth: "100vw"
    }
  };
  return <div style={styles.Page} {...children} />;
};

export default Page;
