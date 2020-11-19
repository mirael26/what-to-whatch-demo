import {AuthorizationStatus, FilmRates} from "./const";

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

export {formatRunTime, makeFirstUpperCase, extend, isAuthorized, findRateDescription};
