const express = require('express');
const router = express.Router();

const homeRoutes = require('./home');
const loginRoutes = require('./login');
const employeeRoutes = require('./employee');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/employee', employeeRoutes);

module.exports = router;