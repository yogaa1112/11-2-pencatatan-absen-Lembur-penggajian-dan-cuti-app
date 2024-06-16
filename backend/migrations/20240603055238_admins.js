/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('admins', function (table) {
        table.bigIncrements('admin_id').primary().index();
        table.string('name')
        table.string('photo_url').nullable()
        table.string('position')
        table.string('email').unique()
        table.string('password')
        table.string('waphone').notNullable()

        table.dateTime('created_at').defaultTo(knex.fn.now())
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable('admins')
};
