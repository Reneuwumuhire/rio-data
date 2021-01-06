import React from "react";
import "./style.css";

const Header = ({ theme, ...children }) => {
  const styles = {
    container: {
      backgroundColor: theme === "light" ? "lightGrey" : "#282c34",
      margin: 20,
      padding: 10
    }
  };
  return <div style={styles.container} {...children} />;
};

export default Header;
