import WeekDay from "./WeekDay";

it("day enum", () => {
  expect(WeekDay.MONDAY).toBe(1);
  expect(WeekDay.TUESDAY).toBe(2);
  expect(WeekDay.WEDNESDAY).toBe(3);
  expect(WeekDay.THURSDAY).toBe(4);
  expect(WeekDay.FRIDAY).toBe(5);
  expect(WeekDay.SATURDAY).toBe(6);
  expect(WeekDay.SUNDAY).toBe(7);
} );
