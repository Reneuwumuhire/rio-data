import React from "react";
import "./style.css";

const Title = ({ text }) => {
  const styles = {
    text: {}
  };
  return <div style={styles.text}>{text}</div>;
};

export default Title;
