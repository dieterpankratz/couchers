// format a date
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

import { dayMillis } from "./timeAgo";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(s: string, short: boolean = false): string {
  const date = new Date(s);
  const monthName = monthNames[date.getMonth()];
  if (short) return `${date.getDate()} ${monthName}`;
  return `${date.getDate()} ${monthName.substr(0, 3)} ${date.getFullYear()}`;
}

export function timestamp2Date(timestamp: Timestamp.AsObject): Date {
  return new Date(Math.floor(timestamp.seconds * 1e3 + timestamp.nanos / 1e6));
}

export const dateTimeFormatter = new Intl.DateTimeFormat(navigator.language, {
  month: "short",
  year: "numeric",
});

export const daysDifference = (date1: string, date2: string): string => {
  const diffTime = Date.parse(date1) - Date.parse(date2);
  const diffDays = Math.ceil(diffTime / dayMillis);
  return diffDays === 1 ? ` ${diffDays} night` : ` ${diffDays} nights`;
};
