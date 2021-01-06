import React from "react";
import "./style.css";

const SubTitle = ({ text }) => {
  const styles = {
    text: {
      fontSize: 20,
      marginBottom: 5
    }
  };
  return <div style={styles.text}>{text}</div>;
};

export default SubTitle;
