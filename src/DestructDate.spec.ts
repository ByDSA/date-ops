import { destructDate, destructDateUTC } from "./DestructDate";
import Month from "./Month";
import WeekDay from "./WeekDay";

const testDate = new Date(Date.parse("Fri, 21 May 1993 8:34:00 GMT+2"));
const testDate2 = new Date(Date.parse("Sun, 23 May 1993 8:34:00 GMT+2"));

describe("utc", () => {
  it("testDate", () => {
    const { year, month, day, hours, minutes, seconds, dweek } = destructDateUTC(testDate);

    expect(year).toBe(1993);
    expect(month).toBe(Month.MAY);
    expect(day).toBe(21);
    expect(hours).toBe(6);
    expect(minutes).toBe(34);
    expect(seconds).toBe(0);
    expect(dweek).toBe(WeekDay.FRIDAY);
  } );

  it("0", () => {
    const { year, month, day, hours, minutes, seconds, dweek } = destructDateUTC(new Date(0));

    expect(year).toBe(1970);
    expect(month).toBe(Month.JANUARY);
    expect(day).toBe(1);
    expect(hours).toBe(0);
    expect(minutes).toBe(0);
    expect(seconds).toBe(0);
    expect(dweek).toBe(WeekDay.THURSDAY);
  } );

  it("no param", () => {
    const { year, month, day, hours, minutes, seconds, dweek } = destructDateUTC();

    expect(year).toBeDefined();
    expect(month).toBeDefined();
    expect(day).toBeDefined();
    expect(hours).toBeDefined();
    expect(minutes).toBeDefined();
    expect(seconds).toBeDefined();
    expect(dweek).toBeDefined();
  } );
} );

describe("normal", () => {
  it("testDate", () => {
    const { year, month, day, hours, minutes, seconds, dweek } = destructDate(testDate);

    expect(year).toBe(1993);
    expect(month).toBe(Month.MAY);
    expect(day).toBe(21);
    expect(hours).toBe(8);
    expect(minutes).toBe(34);
    expect(seconds).toBe(0);
    expect(dweek).toBe(WeekDay.FRIDAY);
  } );

  it("testDate2", () => {
    const { year, month, day, hours, minutes, seconds, dweek } = destructDate(testDate2);

    expect(year).toBe(1993);
    expect(month).toBe(Month.MAY);
    expect(day).toBe(23);
    expect(hours).toBe(8);
    expect(minutes).toBe(34);
    expect(seconds).toBe(0);
    expect(dweek).toBe(WeekDay.SUNDAY);
  } );

  it("no param", () => {
    const { year, month, day, hours, minutes, seconds, dweek } = destructDate();

    expect(year).toBeDefined();
    expect(month).toBeDefined();
    expect(day).toBeDefined();
    expect(hours).toBeDefined();
    expect(minutes).toBeDefined();
    expect(seconds).toBeDefined();
    expect(dweek).toBeDefined();
  } );
} );
