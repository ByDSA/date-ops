import TimeUnit from "./TimeUnit";

export function utcToLocal(date: Date) {
  const result = new Date(date);

  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());

  return result;
}

const millisecondsPer: number[] = [];

millisecondsPer[TimeUnit.MILLISECONDS] = 1;
millisecondsPer[TimeUnit.SECONDS] = 1000;
millisecondsPer[TimeUnit.MINUTES] = millisecondsPer[TimeUnit.SECONDS] * 60;
millisecondsPer[TimeUnit.HOURS] = millisecondsPer[TimeUnit.MINUTES] * 60;
millisecondsPer[TimeUnit.DAYS] = millisecondsPer[TimeUnit.HOURS] * 24;

export function millisTo(ms: number, unit: TimeUnit) {
  const quotient = Math.floor(ms / millisecondsPer[unit]);
  const remainder = ms % millisecondsPer[unit];

  return {
    quotient,
    remainder,
  };
}
