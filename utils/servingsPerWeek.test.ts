import servingsPerWeek from "./servingsPerWeek";

it("calculates mercury per week", () => {
  expect(servingsPerWeek(10, 1, 1)).toBe(7);
});
