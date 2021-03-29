import { destructDateUTC } from "./DestructDate";
import Month from "./Month";
import { daysBetween, utcToLocal } from "./TimeUtils";
import WeekDay from "./WeekDay";

it("destruct date UTC 0", () => {
  const { year, month, day, hours, minutes, seconds, dweek } = destructDateUTC(new Date(0));

  expect(year).toBe(1970);
  expect(month).toBe(Month.JANUARY);
  expect(day).toBe(1);
  expect(hours).toBe(0);
  expect(minutes).toBe(0);
  expect(seconds).toBe(0);
  expect(dweek).toBe(WeekDay.THURSDAY);
} );

const testDate = new Date(1993, Month.MAY, 21, 8, 34, 0);
const testDate2 = new Date(1993, Month.MAY, 23, 8, 34, 0);

it("UTC to UTlocal", () => {
  const dateUTC = new Date(testDate.getUTCFullYear(), testDate.getUTCMonth(),
    testDate.getUTCDate(), testDate.getUTCHours(), testDate.getUTCMinutes());
  const actual = utcToLocal(dateUTC);
  const expected = testDate;

  expect(actual).toEqual(expected);
} );
it("daysBetween itself", () => {
  const actual = daysBetween(testDate, testDate);
  const expected = 0;

  expect(actual).toBe(expected);
} );
it("daysBetween", () => {
  const actual = daysBetween(testDate, testDate2);
  const expected = 2;

  expect(actual).toBe(expected);
} );
