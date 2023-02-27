const { homeController } = require("./home.controller");
const { calendarController } = require("./calendar.controller");
const routes = {
  homeController,
  calendarController,
};

module.exports = {
  routes,
};
