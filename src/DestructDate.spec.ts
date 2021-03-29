import { destructDate, destructDateUTC } from "./DestructDate";
import Month from "./Month";
import WeekDay from "./WeekDay";

const testDate = new Date(1993, Month.MAY, 21, 8, 34, 0);
const testDate2 = new Date(1993, Month.MAY, 23, 8, 34, 0);

it("destruct testDate UTC", () => {
  const { year, month, day, hours, minutes, seconds, dweek } = destructDateUTC(testDate);

  expect(year).toBe(1993);
  expect(month).toBe(Month.MAY);
  expect(day).toBe(21);
  expect(hours).toBe(6);
  expect(minutes).toBe(34);
  expect(seconds).toBe(0);
  expect(dweek).toBe(WeekDay.FRIDAY);
} );

it("destruct testDate", () => {
  const { year, month, day, hours, minutes, seconds, dweek } = destructDate(testDate);

  expect(year).toBe(1993);
  expect(month).toBe(Month.MAY);
  expect(day).toBe(21);
  expect(hours).toBe(8);
  expect(minutes).toBe(34);
  expect(seconds).toBe(0);
  expect(dweek).toBe(WeekDay.FRIDAY);
} );

it("destruct testDate2", () => {
  const { year, month, day, hours, minutes, seconds, dweek } = destructDate(testDate2);

  expect(year).toBe(1993);
  expect(month).toBe(Month.MAY);
  expect(day).toBe(23);
  expect(hours).toBe(8);
  expect(minutes).toBe(34);
  expect(seconds).toBe(0);
  expect(dweek).toBe(WeekDay.SUNDAY);
} );
