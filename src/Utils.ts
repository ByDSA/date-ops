/* eslint-disable import/prefer-default-export */
import { DateTime } from "luxon";
import WeekDay from "./WeekDay";

export function isWeekend(date = DateTime.now()) {
  const { weekday } = date;
  let ret;

  switch (weekday) {
    case WeekDay.SATURDAY:
    case WeekDay.SUNDAY:
      ret = true;
      break;
    default:
      ret = false;
  }

  return ret;
}
