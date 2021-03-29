/* eslint-disable no-restricted-syntax */
import { DateTime } from "luxon";
import Month from "./Month";
import { isWeekend } from "./Utils";

type MonthDay =[Month, number];
type YearMonthDay = {month: Month, day: number, year?: number};
type DependsOfYearFunc = (year: number)=> YearMonthDay;

function currentYear() {
  return DateTime.now().year;
}

export default class Calendar {
  private festivos = new Map<number|undefined, MonthDay[]>();

  private festivosDependsOfYear: DependsOfYearFunc[];

  constructor() {
    this.festivos = new Map();
    this.festivosDependsOfYear = [];
  }

  addPublicHoliday( { month, day, year }: YearMonthDay): Calendar {
    let yearArray = this.festivos.get(year);

    if (!yearArray) {
      yearArray = [];
      this.festivos.set(year, yearArray);
    }

    yearArray.push([month, day]);

    return this;
  }

  addPublicHolidayDependsOfYear(f: DependsOfYearFunc): Calendar {
    this.festivosDependsOfYear.push(f);

    return this;
  }

  isPublicHoliday( { year, month, day }: YearMonthDay): boolean {
    const allYearsFestivos = this.festivos.get(undefined);

    if (allYearsFestivos) {
      for (const monthDay of allYearsFestivos) {
        if (monthDay[0] === month && monthDay[1] === day)
          return true;
      }
    }

    if (year !== undefined) {
      const yearsFestivos = this.festivos.get(year);

      if (yearsFestivos) {
        for (const monthDay of yearsFestivos) {
          if (monthDay[0] === month && monthDay[1] === day)
            return true;
        }
      }

      for (const f of this.festivosDependsOfYear) {
        const yearMonthDay = f(year);

        if (yearMonthDay.month === month && yearMonthDay.day === day)
          return true;
      }
    }

    return false;
  }

  isWorkday( { month, day, year = currentYear() }: YearMonthDay): boolean {
    return !isWeekend(DateTime.local(year, month, day)) && !this.isPublicHoliday( {
      year,
      month,
      day,
    } );
  }
}
