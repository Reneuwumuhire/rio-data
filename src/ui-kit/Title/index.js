import React from "react";
import "./style.css";

const Title = ({ text, large, bold, divider }) => {
  const styles = {
    text: {
      color: "white",
      fontSize: large ? 32 : 28,
      fontWeight: bold && "bold",
      borderBottom: divider && "1.5px solid #CDE7DB",
      paddingBottom: divider ? 10 : 5,
      width: divider && "50%",
      marginBottom: 15
    }
  };
  return <div style={styles.text}>{text}</div>;
};

export default Title;
