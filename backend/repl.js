const db = require("./services/db")

async function repl() {
    
    let azz = await db('employee_personal').select()
    console.log(azz.length)
    
}

repl()