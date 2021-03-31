> Advanced and simple operations with dates and calendars.
# date-ops

[![NPM version](http://img.shields.io/npm/v/date-ops.svg)](https://www.npmjs.com/package/date-ops)
[![Generic badge](https://img.shields.io/badge/GitHub-date--ops-blue.svg?logo=github)](https://github.com/ByDSA/date-ops)
[![CI](https://github.com/ByDSA/date-ops/actions/workflows/ci.yml/badge.svg)](https://github.com/ByDSA/date-ops/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ByDSA/date-ops/branch/main/graph/badge.svg?token=RIJ2K00E5J)](https://codecov.io/gh/ByDSA/date-ops)

Read [docs](https://github.com/ByDSA/date-ops/wiki).

This library uses [Luxon library](https://www.npmjs.com/package/luxon) to represent dates and times.

---

## Install
npm:
```bash
npm install date-ops
```
Yarn:

```bash
yarn add date-ops
```

## How to use

### Calendar
```js
import { Calendar, easterOf } from "date-ops";
import { DateTime } from "luxon";

const calendar = new Calendar();
const date = DateTime.utc(2021, 3, 30);
const check1 = calendar.isWorkday(date); // true
const check2 = calendar.isPublicHoliday(date); // false

calendar.addPublicHoliday(date);
const check3 = calendar.isPublicHoliday(date); // true
const check4 = calendar.isWorkday(date); // false

const date2 = DateTime.utc(2021, 4, 4);
const check5 = calendar.isPublicHoliday(date2); // false
calendar.addPublicHolidayDependsOfYear(easterOf);
const check6 = calendar.isPublicHoliday(date2); // true
```

### Date Retrieval
```js
const date = DateTime.utc(2021, 3, 30); // It's Tuesday
const retrieval1 = nextWeekDay(date, WeekDay.FRIDAY); // 2021 04 02
const retrieval2 = nextWeekDay(date, WeekDay.TUESDAY); // 2021 04 06
const retrieval3 = lastWeekDay(date, WeekDay.SUNDAY); // 2021 03 28
const retrieval4 = lastWeekDay(date, WeekDay.TUESDAY); // 2021 03 23
const retrieval5 = nthWeekDayInMonth(
  2021, Month.MAY, WeekDay.SUNDAY, 2
); // 2nd Sunday of May, 2021: 2021 05 09
const retrieval6 = nthWeekDayInMonth(
  2021, Month.MAY, WeekDay.SUNDAY, 6
); // undefined
const retrieval7 = nthWeekDayInMonthBack(
  2021, Month.MAY, WeekDay.SUNDAY, 1
); // Last Sunday of May, 2021: 2021 05 30
const retrieval8 = mothersDayOf(2021); // (Spain): 2021 05 02
const retrieval9 = easterOf(2021); // 2021 04 04
const retrieval10 = thanksGivingDayOf(2021); // 2021 11 25
```

### Some util functions
```js
const from = DateTime.utc(1970, 1, 1);
const to = DateTime.utc(2021, 3, 30);
const days = daysBetween(from, to); // 18716
const millis = millisBetween(from, to); // 1617062400000
const check = isWeekend(date); // false
const timeStamp = getTimestamp(from); // 19700101T000000
```

### Enums
```js
const {
  MONDAY, TUESDAY, WEDNESDAY,
  THURSDAY, FRIDAY, SATURDAY,
  SUNDAY
} = WeekDay; // MONDAY=1, SUNDAY=6

const {
  MONDAY, TUESDAY, WEDNESDAY,
  THURSDAY, FRIDAY, SATURDAY,
  SUNDAY
} = WeekDayJS; // MONDAY=1, SUNDAY=0

const { JANUARY, FEBRUARY, MARCH,
  APRIL, MAY, JUNE, JULY, AUGUST,
  SEPTEMBER, OCTOBER, NOVEMBER,
  DECEMBER
} = Month; // JANUARY = 1, DECEMBER=12

const { JANUARY, FEBRUARY, MARCH,
  APRIL, MAY, JUNE, JULY, AUGUST,
  SEPTEMBER, OCTOBER, NOVEMBER,
  DECEMBER
} = MonthJS; // JANUARY = 0, DECEMBER=11

```

---

©2021 Daniel Sales Álvarez <danisales.es@gmail.com>
