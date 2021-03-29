export function utcToLocal(date: Date) {
  const result = new Date(date);

  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());

  return result;
}

export function daysBetween(startDate: Date, endDate: Date): number {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const timeStartDate = utcToLocal(startDate).getTime();
  const timeEndDate = utcToLocal(endDate).getTime();

  return (timeEndDate - timeStartDate) / millisecondsPerDay;
}
