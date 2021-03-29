import { destructJSDate } from "./DestructDate";
import MonthJS from "./MonthJS";
import WeekDayJS from "./WeekDayJS";

const testDate = new Date(Date.parse("Fri, 21 May 1993 8:34:00 GMT+2"));
const testDate2 = new Date(Date.parse("Sun, 23 May 1993 8:34:00 GMT+2"));

describe("normal", () => {
  it("testDate", () => {
    const { year, month, day, hours, minutes, seconds, dweek } = destructJSDate(testDate);

    expect(year).toBe(1993);
    expect(month).toBe(MonthJS.MAY);
    expect(day).toBe(21);
    expect(hours).toBe(8);
    expect(minutes).toBe(34);
    expect(seconds).toBe(0);
    expect(dweek).toBe(WeekDayJS.FRIDAY);
  } );

  it("testDate2", () => {
    const { year, month, day, hours, minutes, seconds, dweek } = destructJSDate(testDate2);

    expect(year).toBe(1993);
    expect(month).toBe(MonthJS.MAY);
    expect(day).toBe(23);
    expect(hours).toBe(8);
    expect(minutes).toBe(34);
    expect(seconds).toBe(0);
    expect(dweek).toBe(WeekDayJS.SUNDAY);
  } );

  it("no param", () => {
    const { year, month, day, hours, minutes, seconds, dweek } = destructJSDate();

    expect(year).toBeDefined();
    expect(month).toBeDefined();
    expect(day).toBeDefined();
    expect(hours).toBeDefined();
    expect(minutes).toBeDefined();
    expect(seconds).toBeDefined();
    expect(dweek).toBeDefined();
  } );
} );
