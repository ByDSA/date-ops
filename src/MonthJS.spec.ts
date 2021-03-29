import MonthJS from "./MonthJS";

it("month enum", () => {
  expect(MonthJS.JANUARY).toBe(0);
  expect(MonthJS.FEBRUARY).toBe(1);
  expect(MonthJS.MARCH).toBe(2);
  expect(MonthJS.APRIL).toBe(3);
  expect(MonthJS.MAY).toBe(4);
  expect(MonthJS.JUNE).toBe(5);
  expect(MonthJS.JULY).toBe(6);
  expect(MonthJS.AUGUST).toBe(7);
  expect(MonthJS.SEPTEMBER).toBe(8);
  expect(MonthJS.OCTOBER).toBe(9);
  expect(MonthJS.NOVEMBER).toBe(10);
  expect(MonthJS.DECEMBER).toBe(11);
} );
