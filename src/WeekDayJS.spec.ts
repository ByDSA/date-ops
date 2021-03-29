import WeekDayJS from "./WeekDayJS";

it("day enum", () => {
  expect(WeekDayJS.MONDAY).toBe(1);
  expect(WeekDayJS.TUESDAY).toBe(2);
  expect(WeekDayJS.WEDNESDAY).toBe(3);
  expect(WeekDayJS.THURSDAY).toBe(4);
  expect(WeekDayJS.FRIDAY).toBe(5);
  expect(WeekDayJS.SATURDAY).toBe(6);
  expect(WeekDayJS.SUNDAY).toBe(0);
} );
