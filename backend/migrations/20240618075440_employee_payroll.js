/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('employee_payroll', function (table) {
        table.bigIncrements('payroll_id').primary().index();
        table.bigInteger('employee_id').unsigned().references('employee_id').inTable('employee_personal').onDelete('CASCADE').onUpdate('CASCADE')
        table.string('status')
        table.string('position')
        table.string('location')
        table.string('join_date')
        table.string('work_placement')
        table.string('bank_name')
        table.string('account_holder_name')
        table.string('account_number')
        table.string('salary_amount')
        table.string('salary_date')

        table.dateTime('created_at').defaultTo(knex.fn.now())
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable('employee_payroll')
};
