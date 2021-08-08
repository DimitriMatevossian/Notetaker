const express = require('express');
const router = express.Router();
const path = require('path');
const data = require(path.join(__dirname, '../../../../db/db.json'));
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


router.get('/', (req, res) => {
  res.send('API router');
});

router.get('/notes', (req, res) => {
  fs.readFile(path.join(__dirname,"../../../../db/db.json"),(err, data) => {
    if (err) throw err;

    res.json(JSON.parse(data));
  });
});


router.post('/notes', (req, res) => {
  //read in the old db.json
  return fs.readFile(path.join(__dirname,"../../../../db/db.json"), (err, data) => {
    if (err) throw err;
    
    const notes = req.body;
    notes.id = uuidv4();

    //add the new body into the json file
    const allNotes = JSON.parse(data);
    allNotes.push(notes);

    fs.writeFile(path.join(__dirname,"../../../../db/db.json"), JSON.stringify(allNotes), (err) => {
      if (err) throw err;
      res.json({success: "true"});
    });
  });
});

router.delete('/notes/:id', (req, res) => {
  return fs.readFile(path.join(__dirname,"../../../../db/db.json"), (err, data) => {
    if (err) throw err;

    const notes = JSON.parse(data);
    const newNotes = notes.filter(note => note.id != req.params.id);

    fs.writeFile(path.join(__dirname,"../../../../db/db.json"), JSON.stringify(newNotes), (err) => {
      if (err) throw err;
      res.json({success: "true"});
    });
  });
});

module.exports = router;