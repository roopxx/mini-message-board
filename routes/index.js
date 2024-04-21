const messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    added: new Date().toLocaleString(),
  },
  {
    text: "Hello World!",
    user: "John",
    added: new Date().toLocaleString(),
  },
];

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages,
  });
});

module.exports = router;
