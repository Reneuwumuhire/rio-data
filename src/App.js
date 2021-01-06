import { Page, Header, Title, SubTitle, Section, StatBox } from "./ui-kit";

function App() {
  const stats = [
    { statName: "Nationalities", value: 24 },
    { statName: "Gold medal winners", value: 78 },
    { statName: "Silver medal Winners", value: 30 }
  ];
  return (
    <Page>
      <Header theme="light">
        <Title text={`Rio Data`} bold={false} large divider />
        <SubTitle
          text={`This app gets insights from a dataset of the 2016 Olympic Games in Rio
        de Janeiro.`}
          subText={`It listed every sport, every athlete, every event,
        and the winners of every gold, silver, and bronze medal.`}
        />
      </Header>

      <Section>
        <StatBox title={`Statistics`} stats={stats} />
      </Section>
    </Page>
  );
}

export default App;
