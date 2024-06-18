const db = require('../services/db')
const bcrypt = require('bcryptjs');

module.exports = {
    registerAdmin: async (req, res) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            delete req.body.confirm
            console.log(req.body)
            await db('admins').insert(req.body)
            return res.json({ message: 'success' })
        } catch (err) {
            console.log(err)
            return res.json({ message: 'error' })
        }

      },
}