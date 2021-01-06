import React from "react";
import "./styles.css";

const Header = ({ theme, ...children }) => {
  const styles = {
    container: {
      backgroundColor: theme === "light" ? "lightGrey" : "#282c34"
    }
  };
  return <div style={styles.container}>{...children}</div>;
};

export default Header;
