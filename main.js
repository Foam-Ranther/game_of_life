import { gameOfLife } from "./src/programs.js";
import { grid } from "./src/grid.js";
import {
  achim101InitialPos,
  cabbageInitialPos,
  eaterInitialPos,
  gliderInitialPos,
  gosperGliderGunInitialPos,
  lwssInitialPos,
  oscialltorInitialPos,
  p60PufferInitialPos,
  pulsarInitialPos,
  rPentominoInitialPos,
  slider,
  stablePosition,
  trafficLightInitialPos,
} from "./src/block_positions.js";
const main = () => {
  gameOfLife(grid, cabbageInitialPos);
};

main();
