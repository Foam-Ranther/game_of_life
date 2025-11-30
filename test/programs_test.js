import { assertEquals } from "@std/assert";
import { calculateAdjacentPositions } from "../src/programs.js";

Deno.test("adjacentPostions of [5,5]", () => {
  assertEquals(calculateAdjacentPositions([5, 5]), [
    [6, 5],
    [5, 6],
    [4, 5],
    [5, 4],
    [4, 4],
    [4, 6],
    [6, 6],
    [6, 4],
  ]);
});
