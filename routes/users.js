const express = require("express");
const router = express.Router();
const getAllUsers = require("../services/users").getAllUsers;

router.get("/getAllUsers", async (req, res) => {
  let response = await getAllUsers();
  res.status(response.status).send(response.data);
});

module.exports = router;
