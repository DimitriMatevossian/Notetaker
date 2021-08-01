const express = require('express');
const router = express.Router();
const path = require('path');
const data = require(path.join(__dirname, '../../../../db/db.json'));

router.get('/', (req, res) => {
  res.send('API router');
});

router.get('/notes', (req, res) => {
  console.log('Made it to /api/notes');

  //res.header("Content-Type",'application/json');
  //res.sendFile(path.join(__dirname, '../../../../db/db.json'));

  res.json(JSON.stringify(data));
});

module.exports = router;