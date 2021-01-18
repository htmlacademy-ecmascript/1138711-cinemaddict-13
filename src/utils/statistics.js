import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);

export const getClearHoursFromMins = (mins) => {
  const hours = Math.trunc(mins / 60);
  return hours;
};

export const getRestMinutes = (mins) => {
  const minutes = mins % 60;
  return minutes;
};

export const makeItemsUniq = (items) => [...new Set(items)];

export const Period = {
  TODAY: `today`,
  WEEK: `week`,
  MONTH: `month`,
  YEAR: `year`,
  ALL_TIME: `all-time`
};

export const DaysNumber = {
  TODAY: 1,
  WEEK: 7,
  MONTH: 30,
  YEAR: 365,
  ALL_TIME: 365
};
