const express = require("express");
const router = express.Router();
const sendNewMessage = require("../services/messages").sendNewMessage;
const getUserRecentMessages =
  require("../services/messages").getUserRecentMessages;

router.post("/sendNewMessage", async (req, res) => {
  let response = await sendNewMessage(req.body);
  res.status(response.status).send(response.data);
});

router.get("/getUserRecentMessages", async (req, res) => {
  let response = await getUserRecentMessages();
  res.status(response.status).send(response.data.data);
});

module.exports = router;
