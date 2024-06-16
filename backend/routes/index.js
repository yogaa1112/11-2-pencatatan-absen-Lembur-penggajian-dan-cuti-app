const express = require('express');
const router = express.Router();

const homeRoutes = require('./home');
const loginRoutes = require('./login');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);

module.exports = router;