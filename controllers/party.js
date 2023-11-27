const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');

// import models
const { party } = require('../models');

router.post("/", async(req, res) => {
  const {partyLocation, partyTitle} = req.body; // goes and us access to whatever key/value inside of the object
  console.log(partyLocation, partyTitle)
  console.log(req.user.id)
  try {
    const createdParty = await party.create({location: partyLocation, name: partyTitle, userID: req.user.id})
    console.log(createdParty)
    return res.redirect("/");
  } catch (error) {
    console.log(error)
    return res.redirect("/");
  }
});


module.exports = router;