import {
  Page,
  Header,
  Title,
  SubTitle,
  Section,
  StatBox,
  DonutChart
} from "./ui-kit";
import data from "./rio_data.json";

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

      <Section spaced>
        <StatBox title={`Statistics`} stats={stats} />
        <DonutChart
          data={[
            {
              label: "Female",
              value: 25
            },
            {
              label: "Male",
              value: 75
            }
          ]}
        />
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
