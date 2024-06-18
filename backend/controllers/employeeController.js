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
    }
}