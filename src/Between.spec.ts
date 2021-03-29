import { DateTime } from "luxon";
import { daysBetween, millisBetween } from "./Between";
import MonthJS from "./MonthJS";

const testDate = DateTime.fromJSDate(new Date(1993, MonthJS.MAY, 21, 8, 34, 0));
const testDate2 = DateTime.fromJSDate(new Date(1993, MonthJS.MAY, 23, 8, 34, 0));

describe("daysBetween", () => {
  it("testDate itself", () => {
    const actual = daysBetween(testDate, testDate);
    const expected = 0;

    expect(actual).toBe(expected);
  } );
  it("testDate-testDate2", () => {
    const actual = daysBetween(testDate, testDate2);
    const expected = 2;

    expect(actual).toBe(expected);
  } );
} );

describe("millisBetween", () => {
  it("testDate and testDate2", () => {
    const actual = millisBetween(testDate, testDate2);
    const expected = 1000 * 60 * 60 * 24 * 2;

    expect(actual).toBe(expected);
  } );

  it("a < b", () => {
    const actual = millisBetween(testDate2, testDate);
    const expected = NaN;

    expect(actual).toBe(expected);
  } );
} );
