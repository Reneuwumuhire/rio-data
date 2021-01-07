import React from "react";
import "./style.css";

const Table = ({ data, labels }) => {
  return (
    <>
      <div style={styles.etiquettes}>
        <div style={styles.row}>
          {labels &&
            labels.map(label => {
              return <div style={styles.record}>{label}</div>;
            })}
        </div>
      </div>
      <div style={styles.urlBox}>
        {data &&
          data.map(record => {
            return (
              <div className="row" style={styles.row}>
                <div style={styles.record}>{record.name}</div>
                <div style={styles.record}>{record.nationality}</div>
                <div style={styles.record}>{record.sex}</div>
                <div style={styles.record}>{record.sport}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};
const styles = {
  etiquettes: {
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 20,
    marginTop: 20,
    paddingRight: 37,
    border: "solid 1px #2F856E",
    backgroundColor: "#B9D5CD"
  },
  row: {
    display: "flex",
    justifyContent: "space-evenly",
    //border: "solid 1px #2F856E",
    padding: 10
  },
  record: {
    width: "100%",
    //border: "solid 1px red",
    justifyContent: "space-evenly"
  },
  urlBox: {
    display: "flex",
    height: "fit-content",
    maxHeight: "30vh",
    overflowY: "scroll",
    border: "solid 1px #2F856E",
    borderRadius: "4px",
    padding: 20,
    margin: 20,
    marginTop: 10,
    flexDirection: "column",
    backgroundColor: "#B9D5CD"
  }
};
export default Table;
