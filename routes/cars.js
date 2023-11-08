const express = require('express');

const {  getCarsMake } = require('../controllers/cars');

const router = express.Router();

router.route('/carsmake').get(getCarsMake)

module.exports = router;
