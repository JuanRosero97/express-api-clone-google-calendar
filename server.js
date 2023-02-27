const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

let { routes } = require("./controller/index.js");
let { unknownEndpoint } = require("./config/unknownEndpoint.js");

module.exports = function server() {
  let app = express();
  dotenv.config();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(morgan("dev"));
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  /* Routes */
  app.use("/home", routes.homeController);
  app.use("/calendar", routes.calendarController);
  app.use(unknownEndpoint);

  return app;
};
