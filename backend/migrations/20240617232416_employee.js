/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('employee_personal', function (table) {
        table.bigIncrements('employee_id').primary().index();
        table.bigInteger('admin_id').unsigned().references('admin_id').inTable('admins').onDelete('CASCADE').onUpdate('CASCADE')
        table.string('photo_url').nullable()
        table.string('full_name')
        table.string('nik')
        table.string('gender')
        table.string('religion')
        table.string('birth_place')
        table.string('birth_date')
        table.string('email')
        table.string('password')
        table.text('address')
        table.string('wa_phone')
        table.string('education_level')
        table.string('instituition_name')
        table.string('study_program')

        table.dateTime('created_at').defaultTo(knex.fn.now())
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable('employee_personal')
};
