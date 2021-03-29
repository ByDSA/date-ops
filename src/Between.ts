import { DateTime, Interval } from "luxon";
import TimeUnit from "./TimeUnit";

export function millisBetween(start: DateTime, end: DateTime): number {
  const interval = Interval.fromDateTimes(start, end);
  const { milliseconds } = interval.toDuration(TimeUnit.MILLISECONDS);

  return milliseconds;
}

export function daysBetween(start: DateTime, end: DateTime): number {
  const interval = Interval.fromDateTimes(start, end);
  const { days } = interval.toDuration(TimeUnit.DAYS);

  return Math.floor(days);
}
