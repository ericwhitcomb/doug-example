const express = require("express");
const router = express.Router();
router.use("/api", require("./api"));

// handles GET requests for '/' root url
router.get("/", (req, res) => {
  // returns simple text showing API is active
  res.status(200).send("API is active");
});

module.exports = router;
