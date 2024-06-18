const express = require("express");
const employeeController = require("../controllers/employeeController");

const router = express.Router();

router.post("/add/personal", employeeController.addEmployeePersonal);
router.post("/add/payroll", employeeController.addEmployeePayroll);
router.post("/list", employeeController.employeeList);
router.post("/attendance/in", employeeController.attendanceIn);
router.post("/attendance/out", employeeController.attendanceOut);
router.post("/attendance/list", employeeController.userAttendanceList);

module.exports = router;