import { between, daysBetween } from "./Between";
import Month from "./Month";
import TimeUnit from "./TimeUnit";

const testDate = new Date(1993, Month.MAY, 21, 8, 34, 0);
const testDate2 = new Date(1993, Month.MAY, 23, 8, 34, 0);
const testDate3 = new Date(1993, Month.MAY, 23, 9, 45, 30);

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

describe("between", () => {
  it("days between testDate and testDate2. default units", () => {
    const actual = between( {
      start: testDate,
      end: testDate2,
    } )[TimeUnit.DAYS];

    const expected = 2;

    expect(actual).toBe(expected);
  } );

  it("days between now and testDate2. default start", () => {
    const actual = between( {
      end: testDate2,
    } )[TimeUnit.DAYS];

    expect(actual).toBeLessThanOrEqual(0);
  } );

  it("days between testDate and now. default start", () => {
    const actual = between( {
      start: testDate,
    } )[TimeUnit.DAYS];

    expect(actual).toBeGreaterThanOrEqual(0);
  } );

  it("days between testDate and testDate2. empty units", () => {
    const actual = between( {
      start: testDate,
      end: testDate2,
      units: [],
    } )[TimeUnit.DAYS];

    const expected = 2;

    expect(actual).toBe(expected);
  } );

  it("hours between testDate and testDate2", () => {
    const actual = between( {
      start: testDate,
      end: testDate2,
      units: [TimeUnit.HOURS],
    } )[TimeUnit.HOURS];

    const expected = 48;

    expect(actual).toBe(expected);
  } );

  it("days and minutes between testDate and testDate3", () => {
    const actual = between( {
      start: testDate,
      end: testDate3,
      units: [TimeUnit.DAYS, TimeUnit.MINUTES],
    } );

    const actualDays = actual[TimeUnit.DAYS];
    const actualMinutes = actual[TimeUnit.MINUTES];

    const expectedDays = 2;
    const expectedMinutes = 71;

    expect(actualDays).toBe(expectedDays);
    expect(actualMinutes).toBe(expectedMinutes);
  } );

  it("days, hours, minutes and seconds between testDate and testDate3", () => {
    const actual = between( {
      start: testDate,
      end: testDate3,
      units: [TimeUnit.DAYS, TimeUnit.HOURS, TimeUnit.SECONDS, TimeUnit.MINUTES],
    } );

    const actualDays = actual[TimeUnit.DAYS];
    const actualHours = actual[TimeUnit.HOURS];
    const actualMinutes = actual[TimeUnit.MINUTES];
    const actualSeconds = actual[TimeUnit.SECONDS];

    const expectedDays = 2;
    const expectedHours = 1;
    const expectedMinutes = 11;
    const expectedSeconds = 30;

    expect(actualDays).toBe(expectedDays);
    expect(actualHours).toBe(expectedHours);
    expect(actualMinutes).toBe(expectedMinutes);
    expect(actualSeconds).toBe(expectedSeconds);
  } );
} );
