import { DateTime } from "luxon";
import { Calendar, daysBetween, destructJSDate, destructJSDateUTC, easterOf, getTimestamp, getTimestampNow, isWeekend, lastWeekDay, millisBetween, Month, MonthJS, mothersDayOf, nextWeekDay, nthWeekDayInMonth, nthWeekDayInMonthBack, thanksGivingDayOf, TimeUnit, WeekDay, WeekDayJS } from "./index";

it("daysBetween", () => {
  const from = DateTime.utc(1970, 1, 1);
  const to = DateTime.utc(2021, 3, 30);
  const days = daysBetween(from, to);

  expect(days).toBe(18716);
} );

it("millisBetween", () => {
  const from = DateTime.utc(1970, 1, 1);
  const to = DateTime.utc(2021, 3, 30);
  const millis = millisBetween(from, to);

  expect(millis).toBe(1617062400000);
} );

it("isWeekend", () => {
  const date = DateTime.utc(1970, 1, 1);
  const check = isWeekend(date);

  expect(check).toBeFalsy();
} );

it("getTimestamp", () => {
  const date = DateTime.utc(1970, 1, 1);
  const timestamp = getTimestamp(date);

  expect(timestamp).toBe("19700101T000000");
} );

it("WeekDay", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { MONDAY, TUESDAY, WEDNESDAY,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    THURSDAY, FRIDAY, SATURDAY,
    SUNDAY } = WeekDay;

  expect(MONDAY).toBe(1);
  expect(SUNDAY).toBe(7);
} );

it("WeekDayJS", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { MONDAY, TUESDAY, WEDNESDAY,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    THURSDAY, FRIDAY, SATURDAY,
    SUNDAY } = WeekDayJS;

  expect(MONDAY).toBe(1);
  expect(SUNDAY).toBe(0);
} );

it("Month", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { JANUARY, FEBRUARY, MARCH,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    APRIL, MAY, JUNE, JULY, AUGUST,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    SEPTEMBER, OCTOBER, NOVEMBER,
    DECEMBER } = Month;

  expect(JANUARY).toBe(1);
  expect(DECEMBER).toBe(12);
} );

it("Month", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { JANUARY, FEBRUARY, MARCH,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    APRIL, MAY, JUNE, JULY, AUGUST,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    SEPTEMBER, OCTOBER, NOVEMBER,
    DECEMBER } = MonthJS;

  expect(JANUARY).toBe(0);
  expect(DECEMBER).toBe(11);
} );

it("calendar", () => {
  const calendar = new Calendar();
  const date = DateTime.utc(2021, 3, 30);
  const check1 = calendar.isWorkday(date);
  const check2 = calendar.isPublicHoliday(date);

  calendar.addPublicHoliday(date);
  const check3 = calendar.isPublicHoliday(date);
  const check4 = calendar.isWorkday(date);
  const date2 = DateTime.utc(2021, 4, 4);
  const check5 = calendar.isPublicHoliday(date2);

  calendar.addPublicHolidayDependsOfYear(easterOf);
  const check6 = calendar.isPublicHoliday(date2);

  expect(check1).toBeTruthy();
  expect(check2).toBeFalsy();
  expect(check3).toBeTruthy();
  expect(check4).toBeFalsy();
  expect(check5).toBeFalsy();
  expect(check6).toBeTruthy();
} );

it("date retrieval", () => {
  const date = DateTime.utc(2021, 3, 30); // It's Tuesday
  const retrieval1 = nextWeekDay(date, WeekDay.FRIDAY); // 2021 04 02
  const retrieval2 = nextWeekDay(date, WeekDay.TUESDAY); // 2021 04 06
  const retrieval3 = lastWeekDay(date, WeekDay.SUNDAY); // 2021 03 28
  const retrieval4 = lastWeekDay(date, WeekDay.TUESDAY); // 2021 03 23
  const retrieval5 = nthWeekDayInMonth(
    2021, Month.MAY, WeekDay.SUNDAY, 2,
  ); // 2nd Sunday of May, 2021: 2021 05 09
  const retrieval6 = nthWeekDayInMonth(
    2021, Month.MAY, WeekDay.SUNDAY, 6,
  ); // undefined
  const retrieval7 = nthWeekDayInMonthBack(
    2021, Month.MAY, WeekDay.SUNDAY, 1,
  ); // Last Sunday of May, 2021: 2021 05 30
  const retrieval8 = mothersDayOf(2021); // (Spain): 2021 05 02
  const retrieval9 = easterOf(2021); // 2021 04 04
  const retrieval10 = thanksGivingDayOf(2021); // 2021 11 25

  expect(retrieval1.day).toBe(2);
  expect(retrieval2.day).toBe(6);
  expect(retrieval3.day).toBe(28);
  expect(retrieval4.day).toBe(23);
  expect((<DateTime>retrieval5).day).toBe(9);
  expect(retrieval6).toBeUndefined();
  expect((<DateTime>retrieval7).day).toBe(30);
  expect(retrieval8.day).toBe(2);
  expect(retrieval9.day).toBe(4);
  expect(retrieval10.day).toBe(25);
} );

it("unshown functions", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const f1 = destructJSDate;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const f2 = destructJSDateUTC;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const f3 = getTimestampNow;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const f4 = TimeUnit;
} );
