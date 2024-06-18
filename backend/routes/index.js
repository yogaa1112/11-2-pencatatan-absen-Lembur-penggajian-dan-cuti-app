const express = require('express');
const router = express.Router();

const homeRoutes = require('./home');
const loginRoutes = require('./login');
const employeeRoutes = require('./employee');
const registerRoutes = require('./register');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/employee', employeeRoutes);
router.use('/register', registerRoutes);

module.exports = router;