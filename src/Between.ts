import TimeUnit from "./TimeUnit";
import { millisTo, utcToLocal } from "./TimeUtils";

export function millisBetween(start: Date, end: Date) {
  const timeStartDate = utcToLocal(start).getTime();
  const timeEndDate = utcToLocal(end).getTime();

  return (timeEndDate - timeStartDate);
}

export function daysBetween(startDate: Date, endDate: Date): number {
  const msDiff = millisBetween(startDate, endDate);

  return millisTo(msDiff, TimeUnit.DAYS).quotient;
}

type BetweenParams = {
  start?: Date;
  end?: Date;
  units?: TimeUnit[];
}

export function between( { start = new Date(),
  end = new Date(),
  units }: BetweenParams) {
  let unitsFixed;

  if (!units || units.length === 0)
    unitsFixed = [TimeUnit.DAYS];
  else
    unitsFixed = units;

  unitsFixed.sort((a, b) => b - a);

  let ms = millisBetween(start, end);
  const ret = Array(TimeUnit.DAYS + 1);

  unitsFixed.forEach((u) => {
    const { quotient, remainder } = millisTo(ms, u);

    ms = remainder;
    ret[u] = quotient;
  } );

  return ret;
}
