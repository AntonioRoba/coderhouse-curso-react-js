export const getCategoriesService = async () => {
  const url = '../assets/jsons/categories.json';
  return await fetch(url).then((categories) => categories.json());
};
