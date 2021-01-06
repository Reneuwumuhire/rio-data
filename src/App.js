import { Page, Header, Title, SubTitle, Section, StatBox } from "./ui-kit";
import data from "./rio_data.json";
import DonutChart from "react-donut-chart";

import {
  mapNationalities,
  goldMedalWinners,
  bronzeMedalWinners,
  silverMedalWinners
} from "./utils";
function App() {
  const stats = [
    {
      statName: "Nationalities",
      value: mapNationalities(data).nationalities.length
    },
    { statName: "Gold medal winners", value: goldMedalWinners(data).length },
    {
      statName: "Silver medal Winners",
      value: silverMedalWinners(data).length
    },
    {
      statName: "Bronze medal Winners",
      value: bronzeMedalWinners(data).length
    },
    { statName: "Total Number of Participants", value: data.length }
  ];
  console.log(goldMedalWinners(data));
  return (
    <Page>
      <Header theme="light">
        <Title text={`Rio Data`} bold={false} large divider />
        <SubTitle
          text={`This app gets insights from a dataset of the 2016 Olympic Games in Rio
        de Janeiro.`}
          subText={`Listed below are every sport, every athlete, every event,
        and the winners of every gold, silver, and bronze medal.`}
        />
      </Header>

      <Section>
        <StatBox title={`Statistics`} stats={stats} />
        <div
          style={{
            border: "solid 2px grey",
            height: "fit-content",
            width: "fit-content",
            marginTop: 10
          }}
        >
          <DonutChart
            height={270}
            width={280}
            legend={false}
            innerRadius={0.7}
            data={[
              {
                label: "Female",
                value: 25
              },
              {
                label: "Male",
                value: 75
                //isEmpty: true
              }
            ]}
          />
        </div>
      </Section>
      <Section duo>
        <div style={styles.etiquettes}>
          <div style={styles.row}>
            <div style={styles.record}>Names</div>
            <div style={styles.record}>Nationality</div>
            <div style={styles.record}>Gender</div>
            <div style={styles.record}>Sport</div>
          </div>
        </div>
        <div style={styles.urlBox}>
          {data.map(record => {
            return (
              <div style={styles.row}>
                <div style={styles.record}>{record.name}</div>
                <div style={styles.record}>{record.nationality}</div>
                <div style={styles.record}>{record.sex}</div>
                <div style={styles.record}>{record.sport}</div>
              </div>
            );
          })}
        </div>
      </Section>
    </Page>
  );
}
const styles = {
  etiquettes: {
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 20,
    marginTop: 20,
    paddingRight: 37,
    border: "solid 1px #2F856E"
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
    flexDirection: "column"
  }
};
export default App;
