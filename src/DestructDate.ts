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

export function destructJSDate(date: Date = new Date()) {
  const dateTime = date.getTime();
  const offsetMillis = -date.getTimezoneOffset() * 60 * 1000;
  const dateCopy = new Date(dateTime + offsetMillis);
  const day = dateCopy.getDate();
  const month = dateCopy.getMonth();
  const year = dateCopy.getFullYear();
  const dweek = dateCopy.getDay();
  const hours = dateCopy.getHours();
  const minutes = dateCopy.getMinutes();
  const seconds = dateCopy.getSeconds();

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
