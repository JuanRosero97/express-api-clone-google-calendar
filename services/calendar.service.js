const { google } = require("googleapis");

async function listEventCalendars(calendarID, timeMin, timeMax) {
  try {
    //console.log({ timeMin }, { timeMax });
    const calendar = await autenticate();

    const response = await calendar.events.list({
      calendarId: calendarID ? calendarID : process.env.CALENDAR_ID,
      timeMin,
      timeMax,
      singleEvents: true,
      orderBy: "startTime",
    });

    return { status: true, message: "Listado de eventos", data: response.data };
  } catch (e) {
    console.log("🚀 ~ file: calendar.service.js:5 ~ listCalendar ~ e:", e);
    return {
      status: false,
      message: "No fue posible realizar el listado de los eventos",
      data: [],
    };
  }
}

async function autenticate() {
  try {
    let mycreds = {
      type: "authorized_user",
      client_id: process.env.CLIENT_GOOGLE_ID,
      client_secret: process.env.CLIENT_GOOGLE_SECRET,
      refresh_token: process.env.REFRESH_TOKEN,
    };

    let auth2 = google.auth.fromJSON(mycreds);

    const calendar = google.calendar({
      version: "v3",
      auth: auth2,
    });

    return calendar;
  } catch (e) {
    console.log("🚀 ~ file: calendar.service.js ~ autenticate ~ e:", e);
    throw new Error("No fue posible autenticar el cliente", e);
  }
}

module.exports = {
  listEventCalendars,
};
