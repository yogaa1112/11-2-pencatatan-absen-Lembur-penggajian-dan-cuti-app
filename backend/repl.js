const db = require("./services/db")

async function repl() {
    
    let azz = await db('employee_personal').select()
    let bzz = await db('employee_payroll').select()
    console.log(bzz)

    // await db('employee_payroll').insert(
    //     {
    //         employee_id: 1,
    //         status: 'Permanent',
    //         position: 'Backend Developer',
    //         join_date: '2024-06-05',
    //         work_placement: 'Malang',
    //         bank_name: 'Mandiri',
    //         account_holder_name: 'Fatqan Rama',
    //         account_number: '2100000',
    //         salary_amount: '14000000',
    //         salary_date: '2024-06-20',
    //         created_at: '2024-06-18 08:55:11'
    //     }
    // )
}

repl()