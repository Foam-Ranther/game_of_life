import { grid } from "./grid.js";

export const printGrid = (grid) => {
  for (const row of grid) {
    console.log(row.join(""));
  }
};

export const updatePosition = ({ xCoor, yCoor }, char = "*") => {
  grid[yCoor][xCoor] = char;
};

export const calculateAdjacentPositions = ([yCoor, xCoor]) => {
  const adjacentPositions = [
    [yCoor + 1, xCoor],
    [yCoor, xCoor + 1],
    [yCoor - 1, xCoor],
    [yCoor, xCoor - 1],
    [yCoor - 1, xCoor - 1],
    [yCoor - 1, xCoor + 1],
    [yCoor + 1, xCoor + 1],
    [yCoor + 1, xCoor - 1],
  ];

  return adjacentPositions;
};

const countAliveNeighbours = (grid, [yCoor, xCoor], char) => {
  const adjacentPositions = calculateAdjacentPositions([yCoor, xCoor]);
  return adjacentPositions.reduce(
    (count, [yCoor, xCoor]) => grid[yCoor][xCoor] === char ? count + 1 : count,
    0,
  );
};

const willBeAliveNextMoment = (positions, grid, char) => {
  const aliveNeighbours = countAliveNeighbours(grid, positions, char);
  const [yCoor, xCoor] = positions;
  if (grid[yCoor][xCoor] === " ") return aliveNeighbours === 3;
  return aliveNeighbours === 2 || aliveNeighbours === 3;
};

export const getAliveBlocks = (grid, char) => {
  const aliveBlocks = [];
  for (let row = 1; row < grid.length - 1; row++) {
    for (let col = 1; col < grid[row].length - 1; col++) {
      if (willBeAliveNextMoment([row, col], grid, char)) {
        aliveBlocks.push({ "positions": [row, col], life: true });
      }
    }
  }

  return aliveBlocks;
};

const emptyGrid = (grid) => {
  grid.map((row, i) =>
    row.map((col, j) => {
      grid[i][j] = " ";
    })
  );
};

const updateGrid = (grid, blocks, char = "*") => {
  for (const { positions } of blocks) {
    const [yCoor, xCoor] = positions;
    grid[yCoor][xCoor] = char;
  }
};

export const gameOfLife = (grid, initialPos) => {
  const char = "◼︎";
  updateGrid(grid, initialPos, char);
  const intervalId = setInterval(() => {
    console.clear();
    printGrid(grid);
    const aliveBlocks = getAliveBlocks(grid, char);
    if (aliveBlocks.length === 0) {
      clearInterval(intervalId);
    }
    emptyGrid(grid);
    updateGrid(grid, aliveBlocks, char);
  }, 1000);
};
