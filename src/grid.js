export const createGrid = (height, width) =>
  Array.from(
    { length: height },
    (_) => Array.from({ length: width }, (_) => " "),
  );
