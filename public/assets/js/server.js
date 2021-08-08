const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');

app.use(express.static('../..'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.route('/notes').get((req, res) => {
  res.sendFile(path.join(__dirname, '../../notes.html'));
});

app.use(require('./routes'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});