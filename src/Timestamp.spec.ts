import { DateTime } from "luxon";
import MonthJS from "./MonthJS";
import { getTimestamp, getTimestampJS, getTimestampNow } from "./Timestamp";

const testDate = new Date(1993, MonthJS.MAY, 21, 8, 34, 0);
const testDateTime = DateTime.fromJSDate(testDate);

it("getTimestampJS", () => {
  const actual = getTimestampJS(testDate);
  const expected = "19930521T083400";

  expect(actual).toBe(expected);
} );

it("getTimestamp", () => {
  const actual = getTimestamp(testDateTime);
  const expected = "19930521T083400";

  expect(actual).toBe(expected);
} );

it("getTimestampNow not null", () => {
  const actual = getTimestampNow();

  expect(actual).toBeDefined();
} );
