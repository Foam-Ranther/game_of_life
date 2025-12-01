import { gameOfLife } from "./src/programs.js";
import { createGrid } from "./src/grid.js";
import {
  achim101InitialPos,
  beaconInitialPos,
  cabbageInitialPos,
  checkerboardInitialPos,
  coolMultiplier,
  eaterInitialPos,
  galaxyInitialPos,
  gliderInitialPos,
  gosperGliderGunInitialPos,
  invaderInitialPos,
  lwssInitialPos,
  oscialltorInitialPos,
  p60PufferInitialPos,
  phoenixInitialPos,
  pulsarInitialPos,
  rPentominoInitialPos,
  slider,
  stablePosition,
  textHiInitialPos,
  toadInitialPos,
  trafficLightInitialPos,
} from "./src/block_positions.js";
const main = () => {
  const grid = createGrid(40, 80);
  gameOfLife(grid, achim101InitialPos);
};

main();
