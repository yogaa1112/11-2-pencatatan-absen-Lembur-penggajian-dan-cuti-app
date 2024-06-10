/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('admin', function (table) {
        table.bigInteger('admin_id').primary().index();
        table.string('name')
        table.string('photo_url')
        table.string('position')
        table.string('email').unique()
        table.string('password')
        table.string('waphone')
        table.string('created_at')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable('admin')
};
