export const mapNationalities = data => {
  const groupedNationalities = {};
  data.forEach(({ nationality }) => {
    groupedNationalities[nationality] = groupedNationalities[nationality]
      ? groupedNationalities[nationality] + 1
      : 1;
  });

  return {
    groupedNationalities,
    nationalities: Object.keys(groupedNationalities)
  };
};
export const genderStats = data => {
  const genders = {};
  data.forEach(({ sex }) => {
    genders[sex] = genders[sex] ? genders[sex] + 1 : 1;
  });
  return [
    {
      label: "Female",
      value: genders.female / data.length
    },
    {
      label: "Male",
      value: genders.male / data.length
    }
  ];
};
export const goldMedalWinners = data => data.filter(record => record.gold > 0);
export const bronzeMedalWinners = data =>
  data.filter(record => record.bronze > 0);
export const silverMedalWinners = data =>
  data.filter(record => record.silver > 0);
