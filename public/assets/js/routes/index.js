const express = require('express');
const router = express.Router();
const path = require('path');
//const notes = require('../../../notes.html')

router.use('/api', require('./api_routes.js'));

module.exports = router;