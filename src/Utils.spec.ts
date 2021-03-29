import { DateTime } from "luxon";
import Month from "./Month";
import { isWeekend } from "./Utils";

const testDate = DateTime.local(1993, Month.MAY, 21, 8, 34, 0);
const testDate2 = DateTime.local(1993, Month.MAY, 23, 8, 34, 0);

describe("isWeekend", () => {
  it("Monday", () => {
    const actual = isWeekend(testDate2.plus( {
      days: 1,
    } ));

    expect(actual).toBeFalsy();
  } );

  it("Tuesday", () => {
    const actual = isWeekend(testDate2.plus( {
      days: 2,
    } ));

    expect(actual).toBeFalsy();
  } );

  it("Wednesday", () => {
    const actual = isWeekend(testDate2.plus( {
      days: 3,
    } ));

    expect(actual).toBeFalsy();
  } );
  it("Thursday", () => {
    const actual = isWeekend(testDate2.plus( {
      days: 4,
    } ));

    expect(actual).toBeFalsy();
  } );

  it("Friday", () => {
    const actual = isWeekend(testDate);

    expect(actual).toBeFalsy();
  } );
  it("Saturday", () => {
    const actual = isWeekend(testDate.plus( {
      days: 1,
    } ));

    expect(actual).toBeTruthy();
  } );

  it("Sunday", () => {
    const actual = isWeekend(testDate2);

    expect(actual).toBeTruthy();
  } );

  it("today", () => {
    const actual = isWeekend();

    expect(actual).toBeDefined();
  } );
} );
