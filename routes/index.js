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

router.post("/new", (req, res) => {
  console.log(req.body);
  const user = req.body.user;
  const text = req.body.text;
  messages.push({ text, user, added: new Date().toLocaleString() });

  res.redirect("/");
});

module.exports = router;
