const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');

// import models
const { party } = require('../models');

router.post("/", async(req, res) => {
  const {partyLocation, partyTitle} = req.body; // goes and us access to whatever key/value inside of the object
  console.log(partyLocation, partyTitle)
  try {
    const createdParty = await party.create({partyLocation, partyTitle})
    console.log(createdParty)
    return res.render("index");
  } catch (error) {
    console.log(error)
    return res.render("index");
  }
});


module.exports = router;