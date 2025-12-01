import { gameOfLife } from "./src/programs.js";
import { grid } from "./src/grid.js";
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
  gameOfLife(grid, coolMultiplier);
};

main();
