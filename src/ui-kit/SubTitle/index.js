import React from "react";
import "./style.css";

const SubTitle = ({ text, subText }) => {
  const styles = {
    text: { color: "white", fontSize: 20, marginBottom: 5 },
    subText: { color: "white", fontSize: 15, marginBottom: 5 }
  };
  return (
    <div>
      <div style={styles.text}>{text}</div>
      <div style={styles.subText}>{subText}</div>
    </div>
  );
};

export default SubTitle;
