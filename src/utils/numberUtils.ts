export const generateRange = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => (start + i).toString());
