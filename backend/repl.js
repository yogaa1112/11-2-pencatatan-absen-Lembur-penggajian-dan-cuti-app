const db = require("./services/db")

async function repl() {
    console.log(
        await db('admins').select()
    )
}

repl()