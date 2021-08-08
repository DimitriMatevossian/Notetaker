const express = require('express');
const router = express.Router();
const path = require('path');
const data = require(path.join(__dirname, '../../../../db/db.json'));
const fs = require("fs");


router.get('/', (req, res) => {
  res.send('API router');
});

router.get('/notes', (req, res) => {
  console.log('Made it to /api/notes');

  //res.header("Content-Type",'application/json');
  //res.sendFile(path.join(__dirname, '../../../../db/db.json'));

  fs.readFile(path.join(__dirname,"../../../../db/db.json"),"utf8",(err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });

});

module.exports = router;