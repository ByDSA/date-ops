export function destructJSDateUTC(date: Date = new Date()) {
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();
  const dweek = date.getUTCDay();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  return {
    day,
    month,
    year,
    hours,
    minutes,
    seconds,
    dweek,
  };
}

export function removeOffset(date: Date): Date {
  const dateTime = date.getTime();
  const offsetMillis = -date.getTimezoneOffset() * 60 * 1000;
  const dateCopy = new Date(dateTime + offsetMillis);

  return dateCopy;
}

export function destructJSDate(date: Date = new Date()) {
  const dateCopy = removeOffset(date);

  return destructJSDateUTC(dateCopy);
}
