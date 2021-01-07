import {
  Page,
  Header,
  Title,
  SubTitle,
  Section,
  StatBox,
  DonutChart,
  Table
} from "./ui-kit";
import data from "./rio_data.json";
import {
  mapNationalities,
  goldMedalWinners,
  bronzeMedalWinners,
  silverMedalWinners
} from "./utils";

const App = () => {
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
      <Section col>
        <Table
          data={data}
          labels={["Names", "Nationality", "Gender", "Sport"]}
        />
      </Section>
    </Page>
  );
};

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
export default App;
