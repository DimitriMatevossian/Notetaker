const express = require('express');
const app = express();
const port = 3001;
//const fs = require('fs');
const path = require('path');

app.use(express.static('../..'));


app.use(express.static('public'));

app.route('/notes').get((req, res) => {
  res.redirect('/notes.html');
});

/*
app.use((req, res) => {
  res.status(404).send('Unknown Request');
});
*/

app.use(require('./routes'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});