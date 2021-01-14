const express = require("express");
const { ToDo } = require("../models/todo");
const router = express.Router();

router.get("/", (req, res) => {
  ToDo.find().then((todo) => {
    res.json(todo);
  });
});

router.get("/:_id", (req, res) => {
  const { _id } = req.params;
  ToDo.findById(_id).then((tdo) => {
    res.send(tdo);
  });
});

router.post("/", (req, res) => {
  const { title, body } = req.body;
  todo = new ToDo({ title, body });
  todo.save().then((tdo) => {
    res.json(tdo);
  });
});

router.put("/:_id", async (req, res) => {
  const { _id } = req.params;
  const { title, body } = req.body;
  const todo = await ToDo.findById(_id);
  todo.set({ title, body });
  todo.save().then((tdo) => {
    res.json(tdo);
  });
});

router.delete("/:id", (req, res) => {
  const { _id } = req.params;
  ToDo.deleteOne({ _id }).then((tdo) => {
    res.json(tdo);
  });
});

module.exports = { router };
