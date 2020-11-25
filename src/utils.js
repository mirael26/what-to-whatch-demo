import {AuthorizationStatus, FilmRates} from "./const";
import dayjs from "dayjs";

const duration = require(`dayjs/plugin/duration`);
dayjs.extend(duration);

const formatRunTime = (initialMinutes) => {
  if (initialMinutes > 60) {
    const hours = Math.floor(initialMinutes / 60);
    const minutes = initialMinutes - (hours * 60);
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ``}`;
  }
  return `${initialMinutes}m`;
};

const makeFirstUpperCase = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const isAuthorized = (status) => {
  return status === AuthorizationStatus.AUTH;
};

const findRateDescription = (rate) => {
  switch (Math.floor(rate)) {
    case 0:
    case 1:
    case 2:
      return FilmRates.BAD;
    case 3:
    case 4:
      return FilmRates.NORMAL;
    case 5:
    case 6:
    case 7:
      return FilmRates.GOOD;
    case 8:
    case 9:
      return FilmRates.VERY_GOOD;
    default:
      return FilmRates.AWESOME;
  }
};

const convertIntoTwoNumerals = (number) => {
  return (`0` + number).slice(-2);
};

const formatPlayerTimer = (time) => {
  const seconds = convertIntoTwoNumerals(dayjs.duration(time, `s`).seconds());
  const minutes = convertIntoTwoNumerals(dayjs.duration(time, `s`).minutes());
  const hours = convertIntoTwoNumerals(dayjs.duration(time, `s`).hours());
  return `${hours}:${minutes}:${seconds}`;
};

const debounce = (func, ms) => {

  let isCooldown = false;

  return function (...args) {
    if (isCooldown) {
      return;
    }

    func.apply(...args);

    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;
    }, ms);
  };

}

export {formatRunTime, makeFirstUpperCase, extend, isAuthorized, findRateDescription, convertIntoTwoNumerals, formatPlayerTimer, debounce};
