import { grid } from "./grid.js";
import { blocks } from "./block_positions.js";

const dbg = (x) => {
  console.log(x);
  return x;
};

export const printGrid = (grid) => {
  for (const row of grid) {
    console.log(row.join(""));
  }
};

export const updatePosition = ({ xCoor, yCoor, life }) => {
  const block = "*";
  grid[yCoor][xCoor] = block;
};

const calculateAdjacentPositions = ([yCoor, xCoor]) => {
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

const willComeToLife = (yCoor, xCoor) => {
  const adjacentPositions = calculateAdjacentPositions([yCoor, xCoor]);
  let count = 0;

  for (const [yCoor, xCoor] of adjacentPositions) {
    if (grid[yCoor][xCoor] === "*") {
      count++;
    }
  }

  return count >= 2;
};

export const updateNextCycleBlock = (grid, blocks) => {
  for (let row = 1; row < grid.length - 1; row++) {
    for (let col = 1; col < grid[row].length - 1; col++) {
      if (willComeToLife(row, col)) {
        blocks.push({ "position": [row, col], life: true });
      }
    }
  }

  return blocks;
};

const updateGrid = (grid, blocks) => {
  for (const { position } of blocks) {
    const [yCoor, xCoor] = position;
    grid[yCoor][xCoor] = "*";
  }
};

export const gameOfLife = (initialState) => {
  printGrid(grid);
  updateNextCycleBlock(grid, blocks);
  updateGrid(grid, blocks);
  console.log("---------------------");
  printGrid(grid);
  // getNextBlockPositions(grid, blocks);
};
dbg(gameOfLife(grid));
