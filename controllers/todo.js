const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');

// import models
const { todo } = require('../models');

router.post("/", async(req, res) => {
  const {todoName, todoDescription} = req.body; // goes and us access to whatever key/value inside of the object
  console.log(todoName, todoDescription)
  console.log(req.user.id)
  try {
    const createdTodo = await todo.create({name: todoName, description: todoDescription})
    console.log(createdTodo)
    return res.redirect("/todos");
  } catch (error) {
    console.log(error)
    return res.redirect("/todos");
  }
});


module.exports = router;