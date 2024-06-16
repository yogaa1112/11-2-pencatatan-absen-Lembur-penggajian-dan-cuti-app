const knex = require('knex');
require('dotenv').config()

const db = knex({
    client: 'better-sqlite3', // or 'better-sqlite3'
    connection: {
      filename: './databases/dev.sqlite3'
    },
    useNullAsDefault: true
});

module.exports = db