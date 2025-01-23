export const save = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const load = key => {
  try {
    const loadDataFromLs = localStorage.getItem(key);

    return loadDataFromLs === null ? undefined : JSON.parse(loadDataFromLs);
  } catch (error) {
    console.log(error);
  }
};
