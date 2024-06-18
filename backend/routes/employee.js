const express = require("express");
const employeeController = require("../controllers/employeeController");

const router = express.Router();

router.post("/add/personal", employeeController.addEmployeePersonal);
router.post("/add/payroll", employeeController.addEmployeePayroll);
router.post("/list", employeeController.employeeList);

module.exports = router;