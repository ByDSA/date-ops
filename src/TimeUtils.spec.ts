import { millisBetween } from "./Between";
import Month from "./Month";
import TimeUnit from "./TimeUnit";
import { millisTo, utcToLocal } from "./TimeUtils";

const testDate = new Date(1993, Month.MAY, 21, 8, 34, 0);
const testDate2 = new Date(1993, Month.MAY, 23, 8, 34, 0);

it("UTC to local", () => {
  const dateUTC = new Date(testDate.getUTCFullYear(), testDate.getUTCMonth(),
    testDate.getUTCDate(), testDate.getUTCHours(), testDate.getUTCMinutes());
  const actual = utcToLocal(dateUTC);
  const expected = testDate;

  expect(actual).toEqual(expected);
} );

describe("millisBetween", () => {
  it("testDate and testDate2", () => {
    const actual = millisBetween(testDate, testDate2);
    const expected = 1000 * 60 * 60 * 24 * 2;

    expect(actual).toBe(expected);
  } );

  it("a < b", () => {
    const actual = millisBetween(testDate2, testDate);
    const expected = -1000 * 60 * 60 * 24 * 2;

    expect(actual).toBe(expected);
  } );
} );

describe("millisTo", () => {
  it("3600000 to hours", () => {
    const { quotient, remainder } = millisTo(3600 * 1000, TimeUnit.HOURS);

    const expectedQuotient = 1;
    const expectedRemainder = 0;

    expect(quotient).toBe(expectedQuotient);
    expect(remainder).toBe(expectedRemainder);
  } );

  it("3601000 to hours", () => {
    const { quotient, remainder } = millisTo(3601 * 1000, TimeUnit.HOURS);

    const expectedQuotient = 1;
    const expectedRemainder = 1000;

    expect(quotient).toBe(expectedQuotient);
    expect(remainder).toBe(expectedRemainder);
  } );
} );
