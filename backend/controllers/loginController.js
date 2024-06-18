const db = require('../services/db')
const bcrypt = require('bcryptjs');
const { json } = require('express');
const jwt = require('jsonwebtoken');

module.exports = {
    loginProcAdmin: async (req, res) => {
        const { email, password } = req.body;
        
        try {
            const admin = await db('admins').where({ email }).first();

            if (!admin) {
                return res.json({ message: 'Invalid credentials' });
            }

            const isMatch = await bcrypt.compare(password, admin.password);

            if (!isMatch) {
                return res.json({ message: 'Invalid credentials' });
            }

            const payload = {
                user: {
                    admin_id: admin.admin_id,
                    name: admin.name,
                    photo: admin.photo_url,
                    position: admin.position,
                    role: 'admin'
                },
            }

            jwt.sign(
                payload,
                'prjsecret11x', 
                { expiresIn: '12h' },
                (err, token) => {
                if (err) throw err;
                 res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }

      },

    validate: async (req, res) => {
        const { token } = req.body;
        if (!token) {
            return res.json({ message: 'No token' });
        }

        try {
            let verif = jwt.verify(token, 'prjsecret11x');
            if (!verif) {
                return res.json({ message: 'Invalid token' });
            }
            return res.json({ message: 'Valid token', user: verif.user });
        } catch (err) {
            return res.json({ message: 'Invalid token', error: err });
        }
    },

    loginProcEmployee: async (req, res) => {
        const { email, password } = req.body;
        
        try {
            const employee = await db('employee_personal').where({ email }).first();

            if (!employee) {
                return res.json({ message: 'Invalid credentials' });
            }

            const isMatch = await bcrypt.compare(password, employee.password);

            if (!isMatch) {
                return res.json({ message: 'Invalid credentials' });
            }

            //join employee personal and employee payroll
            const employee_full = await db('employee_personal').where({ email }).join('employee_payroll', 'employee_personal.employee_id', 'employee_payroll.employee_id').select('employee_personal.*', 'employee_payroll.*').first()

            const payload = {
                user: {
                    employee: employee_full,
                    role: 'employee'
                },
            }

            jwt.sign(
                payload,
                'prjsecret11x', 
                { expiresIn: '12h' },
                (err, token) => {
                if (err) throw err;
                 res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }

      },
}