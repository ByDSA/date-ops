export function destructDateUTC(date: Date = new Date()) {
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

export function destructDate(date: Date = new Date()){
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
