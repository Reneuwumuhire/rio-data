function App() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.title}>Rio Data</div>
        <div style={styles.paragraph}>
          This app analyses, and get insights from the 2016 Olympic Games in Rio
          de Janeiro data. It listed every sport, every athlete, every event,
          and the winners of every gold, silver, and bronze medal.
        </div>
      </div>

      <div style={styles.section}>
        <div>Statistics</div>
        <div>Nationalities: 34</div>
        <div>Gold medal winners: 12</div>
        <div>Silver medal Winners: 14</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    backgroundColor: "white" || "#282c34",
    minHeight: "100vh",
    minWidth: "100vw"
  },
  header: {
    backgroundColor: "lightGrey" || "#282c34"
  }
};
export default App;
