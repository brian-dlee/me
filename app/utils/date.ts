import moment from "moment";

const YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;

export function isOlderThanOneYear(date: Date): boolean {
  return date.valueOf() > YEAR_IN_MS
}

export function formatDate(date: Date): string {
  return moment(date).format("MMM YYYY");
}

export function formatMonthRange(start?: Date, end?: Date): string {
  if (start && end) {
    return `${formatDate(start)} to ${formatDate(end)}`;
  } else if (start) {
    return `${formatDate(start)} to present`;
  } else if (end) {
    return formatDate(end);
  } else {
    return "";
  }
}
