const db = require('../services/db');

module.exports = {
    addEmployeePersonal: async (req, res) => {
        console.log(req.body);
        try {
          const id = await db('employee_personal').insert(req.body).returning('employee_id');
          return res.json({ message: 'Data has been added' , id: id[0].employee_id});
        } catch (e) {
          return res.json({ message: 'error' });
        }
      },
    
    addEmployeePayroll: async (req, res) => {
      try {
        await db('employee_payroll').insert(req.body)
        return res.json({ message: 'Data has been added' });
      } catch (e) {
        return res.json({ message: 'error' });
      }
    },

  employeeList: async (req, res) => {
    try {
      console.log(req.body)
      const employees = await db("employee_personal")
        .join(
          "employee_payroll",
          "employee_personal.employee_id",
          "=",
          "employee_payroll.employee_id"
        )
        .where("employee_personal.admin_id", req.body.user.admin_id)
        .select(
          "employee_personal.full_name",
          "employee_payroll.position",
          "employee_personal.wa_phone",
          "employee_payroll.status",
          "employee_personal.gender",
          "employee_payroll.salary_amount",
          "employee_payroll.salary_date"
        );
      return res.json(employees);
    } catch (e) {
      return res.json({ message: "error" });
    }
  }
    
}