const is_development_mode = true;
module.exports = Object.freeze({
  IS_DEVELOPMENT_MODE: is_development_mode,
  OK_STATUS: 200,
  ERROR_STATUS: 500,
  PORT: is_development_mode ? 8080 : 8080,
});
