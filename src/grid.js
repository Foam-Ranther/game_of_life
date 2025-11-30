const size = 70;

const createGrid = (size) => {
  const tempArray = [];
  for (let index = 0; index < size / 2; index++) {
    tempArray.push(" ".repeat(size).split(""));
  }
  return tempArray;
};

export const grid = createGrid(size);
