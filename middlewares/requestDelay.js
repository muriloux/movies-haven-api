const slowDown = require("express-slow-down");

const requestDelay = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 10,
  delayMs: (hits) => hits * 100,
  maxDelayMs: 2000,
});

module.exports = requestDelay;
