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

export const goldMedalWinners = data => data.filter(record => record.gold > 0);
export const bronzeMedalWinners = data =>
  data.filter(record => record.bronze > 0);
export const silverMedalWinners = data =>
  data.filter(record => record.silver > 0);
