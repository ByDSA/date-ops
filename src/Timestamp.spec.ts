import Month from "./Month";
import { getTimestamp, getTimestampNow } from "./Timestamp";

const testDate = new Date(1993, Month.MAY, 21, 8, 34, 0);

it("getTimestamp", () => {
  const actual = getTimestamp(testDate);
  const expected = "19930521083400";

  expect(actual).toBe(expected);
} );

it("getTimestampNow not null", () => {
  const actual = getTimestampNow();

  expect(actual).toBeDefined();
} );
