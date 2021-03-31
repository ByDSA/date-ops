import { DateTime } from "luxon";
import { easterOf, lastWeekDay, mothersDayOf, nextWeekDay, nthWeekDayInMonth, nthWeekDayInMonthBack, thanksGivingDayOf } from "./DateRetrieval";
import Month from "./Month";
import WeekDay from "./WeekDay";

const testDate = DateTime.local(1993, Month.MAY, 21, 8, 34, 0);

describe("lastWeekDay", () => {
  it("testDate saturday", () => {
    const actual = lastWeekDay(testDate, WeekDay.SATURDAY).toMillis();
    const expected = DateTime.local(1993, Month.MAY, 15, 8, 34, 0).toMillis();

    expect(actual).toBe(expected);
  } );
  it("testDate friday", () => {
    const actual = lastWeekDay(testDate, WeekDay.FRIDAY).toMillis();
    const expected = DateTime.local(1993, Month.MAY, 14, 8, 34, 0).toMillis();

    expect(actual).toBe(expected);
  } );
} );

describe("nextWeekDay", () => {
  it("testDate saturday", () => {
    const actual = nextWeekDay(testDate, WeekDay.SATURDAY).toMillis();
    const expected = DateTime.local(1993, Month.MAY, 22, 8, 34, 0).toMillis();

    expect(actual).toBe(expected);
  } );
  it("testDate friday", () => {
    const actual = nextWeekDay(testDate, WeekDay.FRIDAY).toMillis();
    const expected = DateTime.local(1993, Month.MAY, 28, 8, 34, 0).toMillis();

    expect(actual).toBe(expected);
  } );
} );

describe("nthWeekDayInMonth", () => {
  it("First Sunday of May 2021", () => {
    const actual = nthWeekDayInMonth(2021, Month.MAY, WeekDay.SUNDAY, 1)?.day;
    const expected = DateTime.local(2021, Month.MAY, 2).day;

    expect(actual).toBe(expected);
  } );

  it("Impossible: 7th Sunday of May 2021", () => {
    const actual = nthWeekDayInMonth(2021, Month.MAY, WeekDay.SUNDAY, 7)?.day;

    expect(actual).toBeUndefined();
  } );

  it("Impossible: invalid date", () => {
    const actual = nthWeekDayInMonth(2021, 13, WeekDay.SUNDAY, 7)?.day;

    expect(actual).toBeUndefined();
  } );

  it("4th Thursday of November 2021", () => {
    const actual = nthWeekDayInMonth(2021, Month.NOVEMBER, WeekDay.THURSDAY, 4)?.day;
    const expected = DateTime.local(2021, Month.NOVEMBER, 25).day;

    expect(actual).toBe(expected);
  } );
} );

describe("nthWeekDayInMonthBack", () => {
  it("Last Thursday of November 2021", () => {
    const actual = nthWeekDayInMonthBack(2021, Month.NOVEMBER, WeekDay.THURSDAY, 1)?.day;
    const expected = DateTime.local(2021, Month.NOVEMBER, 25).day;

    expect(actual).toBe(expected);
  } );

  it("Count at begin: Last Wednesday of March 2021", () => {
    const actual = nthWeekDayInMonthBack(2021, Month.MARCH, WeekDay.WEDNESDAY, 1)?.day;
    const expected = DateTime.local(2021, Month.MARCH, 31).day;

    expect(actual).toBe(expected);
  } );

  it("Impossible: 7th Back Sunday of May 2021", () => {
    const actual = nthWeekDayInMonthBack(2021, Month.MAY, WeekDay.SUNDAY, 7)?.day;

    expect(actual).toBeUndefined();
  } );

  it("Impossible: invalid date", () => {
    const actual = nthWeekDayInMonthBack(2021, 13, WeekDay.SUNDAY, 7)?.day;

    expect(actual).toBeUndefined();
  } );
} );

it("Mother's Day 2022", () => {
  const actual = mothersDayOf(2022).day;
  const expected = DateTime.local(2022, Month.MAY, 1).day;

  expect(actual).toBe(expected);
} );
it("Mother's Day: default param", () => {
  const actual = mothersDayOf().day;

  expect(actual).toBeDefined();
} );

it("Thanks Giving Day 2022", () => {
  const actual = thanksGivingDayOf(2022).day;
  const expected = DateTime.local(2022, Month.NOVEMBER, 24).day;

  expect(actual).toBe(expected);
} );
it("Thanks Giving Day: default param", () => {
  const actual = thanksGivingDayOf().day;

  expect(actual).toBeDefined();
} );

it("Easter 2021", () => {
  const actual = easterOf(2021).day;
  const expected = DateTime.local(2021, Month.APRIL, 4).day;

  expect(actual).toBe(expected);
} );

it("Easter 2021: default param", () => {
  const actual = easterOf().day;

  expect(actual).toBeDefined();
} );
