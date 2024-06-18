const db = require('../services/db');
const dayjs = require('dayjs');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

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
    },

    attendanceIn: async (req, res) => {
      const { user, image, timestamp } = req.body;

      if (!user || !user.employee) {
        return res.json({ message: "No user data available" });
      }

      const base64Data = image.replace(/^data:image\/jpeg;base64,/, "");
      const fileName = `${uuidv4()}.jpeg`;
      const filePath = path.join(__dirname, '..', 'public/images', fileName);

      const uploadsDir = path.join(__dirname, '..', 'public/images');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir);
      }

      fs.writeFile(filePath, base64Data, 'base64', (err) => {
        if (err) {
          console.error("Error saving image:", err);
          return res.status(500).json({ message: "Error saving image" });
      }});

      let data = {
        admin_id: user.employee.admin_id,
        employee_id: user.employee.employee_id,
        date: dayjs(timestamp).format("DD-MM-YYYY"),
        type: "in",
        day: dayjs(timestamp).format("dddd"),
        hours: dayjs(timestamp).format("HH:mm"),
        photo_url: `/public/images/${fileName}`
      }
      
      try {
        let adminOut = await db('admins').where('admin_id', user.employee.admin_id).first()
        await axios.post('https://api.dripsender.id/send', {
          api_key: 'a707a730-9a99-4714-a713-3bfc675d8e1b',
          text: '*[Data Absen Masuk]*\n\n*Nama:* ' + user.employee.full_name + '\n*Posisi:* ' + user.employee.position + '\n*Tanggal:* ' + dayjs(timestamp).format("DD-MM-YYYY") + '\n*Jam:* ' + dayjs(timestamp).format("HH:mm") + '\n\n_Absen Masuk telah tercatat, terimakasih!_',
          phone: adminOut.waphone
        })
      } catch (e) {
        console.log(e)
      }
      

      try {
        await db('attendance').insert(data);
        console.log('sukses absen')

        return res.json({ message: 'success' });
      } catch (e) {
        console.log(e)
        return res.json({ message: 'error' });
      }
    },

    attendanceOut: async (req, res) => {
      const { user, image, timestamp } = req.body;

      if (!user || !user.employee) {
        return res.json({ message: "No user data available" });
      }

      const base64Data = image.replace(/^data:image\/jpeg;base64,/, "");
      const fileName = `${uuidv4()}.jpeg`;
      const filePath = path.join(__dirname, '..', 'public/images', fileName);

      const uploadsDir = path.join(__dirname, '..', 'public/images');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir);
      }

      fs.writeFile(filePath, base64Data, 'base64', (err) => {
        if (err) {
          console.error("Error saving image:", err);
          return res.status(500).json({ message: "Error saving image" });
      }});

      let data = {
        admin_id: user.employee.admin_id,
        employee_id: user.employee.employee_id,
        date: dayjs(timestamp).format("DD-MM-YYYY"),
        type: "out",
        day: dayjs(timestamp).format("dddd"),
        hours: dayjs(timestamp).format("HH:mm"),
        photo_url: `/public/images/${fileName}`
      }
      
      try {
        let adminIn = await db('admins').where('admin_id', user.employee.admin_id).first()
        await axios.post('https://api.dripsender.id/send', {
          api_key: 'a707a730-9a99-4714-a713-3bfc675d8e1b',
          text: '*[Data Absen Keluar]*\n\n*Nama:* ' + user.employee.full_name + '\n*Posisi:* ' + user.employee.position + '\n*Tanggal:* ' + dayjs(timestamp).format("DD-MM-YYYY") + '\n*Jam:* ' + dayjs(timestamp).format("HH:mm") + '\n\n_Absen Keluar telah berhasil dilakukan, terimakasih!_',
          phone: adminIn.waphone
        })
      } catch (e) {
        console.log(e)
      }
      

      try {
        await db('attendance').insert(data);
        console.log('sukses absen')

        return res.json({ message: 'success' });
      } catch (e) {
        console.log(e)
        return res.json({ message: 'error' });
      }
    },

    userAttendanceList: async (req, res) => {
      const { user } = req.body;

      if (!user || !user.employee) {
        return res.json({ message: "No user data available" });
      }

      try {
        const attendance = await db('attendance')
          .where('employee_id', user.employee.employee_id)
          .orderBy('created_at', 'desc');
        console.log(attendance);
        return res.json(attendance);
      } catch (e) {
        return res.json({ message: 'error' });
      }
    }
    
}