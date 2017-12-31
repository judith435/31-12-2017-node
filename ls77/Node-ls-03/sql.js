// Step 1
const mysql = require('mysql');

// Step 2
const con = mysql.createConnection(
    // connection details
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test'
    }
);

// 3.cconnect
con.connect(function(err) {
    if (err) {
        console.log('Error connecting to DB:' + err);
        return;
    }
    console.log('Connected');
});

// 4. crud : insert
// use backtick `` for free text
con.query(`select * from cars`, function(err, rows) {
    if (err) throw err;
    // console.log(JSON.stringify(rows,null,4));
    rows.forEach(function(row) {
        console.log(row.model);
    });
    /*
        rows.forEach(
        row => {
            console.log(row.model);
        });
    */
});

con.end();