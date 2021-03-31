import { DateTime } from "luxon";
import pascua from "pascua";
import Month from "./Month";
import WeekDay from "./WeekDay";

export function nextWeekDay(dateTime: DateTime, weekDay: WeekDay): DateTime {
  let ret = dateTime;

  do {
    ret = ret.plus( {
      days: 1,
    } );
  } while (ret.weekday !== weekDay);

  return ret;
}

export function lastWeekDay(dateTime: DateTime, weekDay: WeekDay): DateTime {
  let ret = dateTime;

  do {
    ret = ret.minus( {
      days: 1,
    } );
  } while (ret.weekday !== weekDay);

  return ret;
}

export function nthWeekDayInMonth(
  year: number,
  month: Month,
  weekDay: WeekDay,
  nth: number,
): DateTime|undefined {
  let ret = DateTime.local(year, month);

  if (!ret.isValid)
    return undefined;

  ret = ret.startOf("month");

  let count = 0;

  if (ret.weekday === weekDay)
    count++;

  while (count !== nth) {
    ret = ret.plus( {
      days: 1,
    } );

    if (ret.month !== month)
      return undefined;

    if (ret.weekday === weekDay)
      count++;
  }

  return ret;
}

export function nthWeekDayInMonthBack(
  year: number,
  month: Month,
  weekDay: WeekDay,
  nth: number,
): DateTime|undefined {
  let ret = DateTime.local(year, month);

  if (!ret.isValid)
    return undefined;

  ret = ret.endOf("month");

  let count = 0;

  if (ret.weekday === weekDay)
    count++;

  while (count !== nth) {
    ret = ret.minus( {
      days: 1,
    } );

    if (ret.month !== month)
      return undefined;

    if (ret.weekday === weekDay)
      count++;
  }

  return ret;
}

export function mothersDayOf(year: number = currentYear()): DateTime {
  return <DateTime>nthWeekDayInMonth(year, Month.MAY, WeekDay.SUNDAY, 1);
}

export function thanksGivingDayOf(year: number = currentYear()): DateTime {
  return <DateTime>nthWeekDayInMonth(year, Month.NOVEMBER, WeekDay.THURSDAY, 4);
}

export function easterOf(year: number = currentYear()): DateTime {
  const { day, month } = pascua(year);

  return DateTime.local(year, month, day);
}

function currentYear() {
  return DateTime.now().year;
}
