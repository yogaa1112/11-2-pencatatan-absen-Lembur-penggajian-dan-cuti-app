const db = require('../services/db')
const bcrypt = require('bcryptjs');
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
                },
            }

            jwt.sign(
                payload,
                'prjsecret11x', 
                { expiresIn: '1h' },
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