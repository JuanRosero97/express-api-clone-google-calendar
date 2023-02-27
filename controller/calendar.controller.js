const express = require("express");
const calendarService = require("../services/calendar.service");

router = express.Router();

async function listEvents(req, res) {
  let { idCalendar, timeMin, timeMax } = req.query;
  const { data, message, status } = await calendarService.listEventCalendars(
    idCalendar,
    timeMin,
    timeMax
  );

  status
    ? res.status(200).json({ status, message, data })
    : res.status(202).json({ status, message });
}

router.get("/list-events", listEvents);

module.exports = {
  calendarController: router,
};
