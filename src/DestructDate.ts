/* eslint-disable import/prefer-default-export */
export function destructJSDate(date: Date = new Date()) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dweek = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

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
