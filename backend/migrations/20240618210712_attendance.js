/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('attendance', function (table) {
        table.bigIncrements('attendance').primary().index();
        table.bigInteger('admin_id').unsigned().references('admin_id').inTable('admins').onDelete('CASCADE').onUpdate('CASCADE')
        table.bigInteger('employee_id').unsigned().references('employee_id').inTable('employee_personal').onDelete('CASCADE').onUpdate('CASCADE')
        table.string('type')
        table.string('date')
        table.string('day')
        table.string('hours')
        table.string('photo_url')

        table.dateTime('created_at').defaultTo(knex.fn.now())
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable('attendance')
};
