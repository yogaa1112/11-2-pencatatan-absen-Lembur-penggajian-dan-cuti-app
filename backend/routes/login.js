const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.post('/', loginController.loginProcAdmin);
router.post('/employee', loginController.loginProcEmployee);
router.post('/validate', loginController.validate);

module.exports = router;