/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const bcryptjs = require('bcryptjs')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('employee_personal').del()
  await knex('employee_personal').insert([
    {
        admin_id: 1,
        photo_url: null,
        full_name: 'Rama',
        nik: '210403090010',
        gender: 'male',
        religion: 'Islam',
        birth_place: 'Malang',
        birth_date: '2001-01-12',
        email: 'ryushineo@gmail.com',
        password: 'rama',
        address: 'JL KH Hasyim Ashari NO. 66',
        wa_phone: '6282131143178',
        education_level: 'Sarjana',
        instituition_name: 'Universitas PGRI Kanjuruhan Malang',
        study_program: 'Teknik Informatika',
        created_at: '2024-06-18 06:46:50'
    }
  ]);
};
