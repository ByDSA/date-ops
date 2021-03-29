import Month from "./Month";

it("month enum", () => {
  expect(Month.JANUARY).toBe(0);
  expect(Month.FEBRUARY).toBe(1);
  expect(Month.MARCH).toBe(2);
  expect(Month.APRIL).toBe(3);
  expect(Month.MAY).toBe(4);
  expect(Month.JUNE).toBe(5);
  expect(Month.JULY).toBe(6);
  expect(Month.AUGUST).toBe(7);
  expect(Month.SEPTEMBER).toBe(8);
  expect(Month.OCTOBER).toBe(9);
  expect(Month.NOVEMBER).toBe(10);
  expect(Month.DECEMBER).toBe(11);
} );
