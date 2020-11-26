import {AuthorizationStatus, FilmRate} from "./const";
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
      return FilmRate.BAD;
    case 3:
    case 4:
      return FilmRate.NORMAL;
    case 5:
    case 6:
    case 7:
      return FilmRate.GOOD;
    case 8:
    case 9:
      return FilmRate.VERY_GOOD;
    default:
      return FilmRate.AWESOME;
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
};

const validateLogin = (login) => {
  const REG_EXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return REG_EXP.test(login);
};

const validatePassword = (password) => {
  const REG_EXP = /^[a-zA-Z0-9]+/;
  return REG_EXP.test(password);
};

export {formatRunTime, makeFirstUpperCase, extend, isAuthorized, findRateDescription, convertIntoTwoNumerals, formatPlayerTimer, debounce, validateLogin, validatePassword};
