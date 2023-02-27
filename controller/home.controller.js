const express = require("express");
router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "WELCOME TO BACK " + process.env.NODE_ENV?.toUpperCase(),
  });
});

module.exports = {
  homeController: router,
};
