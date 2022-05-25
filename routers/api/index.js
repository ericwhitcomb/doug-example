const express = require("express");
const router = express.Router();
router.use("/notes", require("./notes"));

// handles GET requests for '/api' endpoint
router.get("/", (req, res) => {
  // console logging request headers just to show they are there
  console.log(req.headers);
  // returns json object
  res.status("200").json({ message: "API is active" });
});

module.exports = router;
