import {AuthorizationStatus} from "./const";

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

export {formatRunTime, makeFirstUpperCase, extend, isAuthorized};
