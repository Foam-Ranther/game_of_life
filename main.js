import { gameOfLife } from "./src/programs.js";

const isEven = (a) => {
  const r = a % 2 === 0;
  return r;
};

const main = () => {
  gameOfLife();
};
main();
