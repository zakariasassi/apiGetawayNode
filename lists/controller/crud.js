const mssql = require('mssql');
const con = require('../ListConfig/conf')



const sqlserver = mssql.connect(con , (err) => {
    if (err) {
        console.log(err)
    
    } else {
        console.log("connected")
    }
})






exports.getAllLists = (req , res ) => {
    const request = sqlserver.Request();

    request.query('select *  from List_tbl', (err, result) => {
        if(err) {console.log(err)}
        console.log(result.recordset[0].number) 
    
    })
}



