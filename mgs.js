const chalk = require('chalk');

const success = chalk.keyword('deepskyblue').inverse;
const error = chalk.red.inverse;
const important = chalk.inverse;

module.exports = {
  success,
  error,
  important,
};
