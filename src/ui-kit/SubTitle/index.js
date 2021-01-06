import React from "react";
import "./style.css";

const SubTitle = ({ text }) => {
  const styles = {
    text: {}
  };
  return <div style={styles.text}>{text}</div>;
};

export default SubTitle;
