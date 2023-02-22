export const getVegetablesService = async () => {
  const url = '../assets/jsons/vegetables.json';
  return await fetch(url).then((vegetables) => vegetables.json());
};
