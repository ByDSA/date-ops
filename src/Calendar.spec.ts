import Calendar from "./Calendar";
import { thanksGivingDayOf } from "./DateRetrieval";
import Month from "./Month";

const emptyCalendar = new Calendar();

describe("isWorkday", () => {
  it("2021 March 30", () => {
    const calendar = emptyCalendar;
    const dateObj = {
      year: 2021,
      month: Month.MARCH,
      day: 30,
    };
    const actual = calendar.isWorkday(dateObj);

    expect(actual).toBeTruthy();
  } );

  it("2021 March 28", () => {
    const calendar = emptyCalendar;
    const dateObj = {
      year: 2021,
      month: Month.MARCH,
      day: 28,
    };
    const actual = calendar.isWorkday(dateObj);

    expect(actual).toBeFalsy();
  } );

  it("March 28 (no year)", () => {
    const calendar = emptyCalendar;
    const dateObj = {
      month: Month.MARCH,
      day: 28,
    };
    const actual = calendar.isWorkday(dateObj);

    expect(actual).toBeDefined();
  } );
} );

describe("isPublicHoliday", () => {
  it("2021 March 30", () => {
    const calendar = emptyCalendar;
    const dateObj = {
      year: 2021,
      month: Month.MARCH,
      day: 30,
    };
    const actual = calendar.isPublicHoliday(dateObj);

    expect(actual).toBeFalsy();
  } );

  it("March 30 (no year)", () => {
    const calendar = emptyCalendar;
    const dateObj = {
      month: Month.MARCH,
      day: 30,
    };
    const actual = calendar.isPublicHoliday(dateObj);

    expect(actual).toBeFalsy();
  } );

  it("addPublicHoliday: 2021 March 30", () => {
    const calendar = emptyCalendar;
    const dateObj = {
      year: 2021,
      month: Month.MARCH,
      day: 30,
    };

    calendar.addPublicHoliday(dateObj);

    const actual = calendar.isPublicHoliday(dateObj);

    expect(actual).toBeTruthy();
  } );

  it("addPublicHoliday Multiple: 2021 March 30 and 31", () => {
    const calendar = emptyCalendar;
    const datesObj = {
      year: 2021,
      month: Month.MARCH,
      days: [30, 31],
    };
    const dateObj = {
      year: 2021,
      month: Month.MARCH,
      day: 30,
    };
    const dateObj2 = {
      year: 2021,
      month: Month.MARCH,
      day: 31,
    };

    calendar.addPublicHoliday(datesObj);

    const actual = calendar.isPublicHoliday(dateObj);
    const actual2 = calendar.isPublicHoliday(dateObj2);

    expect(actual).toBeTruthy();
    expect(actual2).toBeTruthy();
  } );

  it("addPublicHoliday: 2021 March 30 (but check 2021 May 31)", () => {
    const calendar = emptyCalendar;
    const dateObj = {
      year: 2021,
      month: Month.MARCH,
      day: 30,
    };
    const dateObj2 = {
      year: 2021,
      month: Month.MAY,
      day: 31,
    };

    calendar.addPublicHoliday(dateObj);

    const actual = calendar.isPublicHoliday(dateObj2);

    expect(actual).toBeFalsy();
  } );

  it("addFestivo: 2021 March 30 (only in 2021)", () => {
    const calendar = emptyCalendar;
    const dateObj = {
      year: 2021,
      month: Month.MARCH,
      day: 30,
    };
    const dateObj2 = {
      year: 2022,
      month: Month.MARCH,
      day: 30,
    };

    calendar.addPublicHoliday(dateObj);

    const actual = calendar.isPublicHoliday(dateObj2);

    expect(actual).toBeFalsy();
  } );

  it("addPublicHoliday: March 30", () => {
    const calendar = emptyCalendar;
    const dateObj = {
      month: Month.MARCH,
      day: 30,
    };
    const dateObj2022 = {
      year: 2022,
      month: Month.MARCH,
      day: 30,
    };
    const dateObj2021 = {
      year: 2022,
      month: Month.MARCH,
      day: 30,
    };

    calendar.addPublicHoliday(dateObj);

    const actual2021 = calendar.isPublicHoliday(dateObj2021);
    const actual2022 = calendar.isPublicHoliday(dateObj2022);
    const actualNoYear = calendar.isPublicHoliday(dateObj);

    expect(actual2021).toBeTruthy();
    expect(actual2022).toBeTruthy();
    expect(actualNoYear).toBeTruthy();
  } );

  it("2021 March 28", () => {
    const calendar = emptyCalendar;
    const dateObj = {
      year: 2021,
      month: Month.MARCH,
      day: 28,
    };
    const actual = calendar.isPublicHoliday(dateObj);

    expect(actual).toBeFalsy();
  } );

  it("DependsOnYear: Thankgivings Day 2021", () => {
    const calendar = new Calendar();

    calendar.addPublicHolidayDependsOfYear(thanksGivingDayOf);

    const dateObj = {
      year: 2021,
      month: Month.NOVEMBER,
      day: 25,
    };
    const actual = calendar.isPublicHoliday(dateObj);

    expect(actual).toBeTruthy();
  } );

  it("DependsOnYear: Thankgivings Day 2021 (but check 2021 March 30", () => {
    const calendar = new Calendar();

    calendar.addPublicHolidayDependsOfYear(thanksGivingDayOf);

    const dateObj = {
      year: 2021,
      month: Month.MARCH,
      day: 30,
    };
    const actual = calendar.isPublicHoliday(dateObj);

    expect(actual).toBeFalsy();
  } );
} );
