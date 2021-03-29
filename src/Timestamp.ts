import { DateTime } from "luxon";

// Timestamp Format: ISO 8601

export function getTimestampJS(date: Date) {
  const year = date.getFullYear().toString()
    .padStart(4, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString()
    .padStart(2, "0");
  const hour = date.getHours().toString()
    .padStart(2, "0");
  const min = date.getMinutes().toString()
    .padStart(2, "0");
  const sec = date.getSeconds().toString()
    .padStart(2, "0");

  return `${year}${month}${day}T${hour}${min}${sec}`;
}

export function getTimestamp(date: DateTime) {
  const year = date.year.toString()
    .padStart(4, "0");
  const month = date.month.toString().padStart(2, "0");
  const day = date.day.toString()
    .padStart(2, "0");
  const hour = date.hour.toString()
    .padStart(2, "0");
  const min = date.minute.toString()
    .padStart(2, "0");
  const sec = date.second.toString()
    .padStart(2, "0");

  return `${year}${month}${day}T${hour}${min}${sec}`;
}

export function getTimestampNow() {
  const date = new Date();

  return getTimestampJS(date);
}
