/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('admins').del()
  await knex('admins').insert([
    {
      name: 'demo satu',
      position: 'HRD',
      email: 'demo@gmail.com',
      password: 'demo',
      waphone: '6282131143178',
    },
  ]);
};
