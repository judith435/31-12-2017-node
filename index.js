const mysql = require('mysql');
var express = require('express');
var app = express();

app.get('/', function (req, res) {

    var products = [];

    // 1.create connection
    const con = mysql.createConnection(
        // connection details
        {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'northwind'
        }
    );
    // 2.cconnect
    con.connect(
        err => {
            if (err) {
                console.log('Error connecting to DB:' + err);
                return;
            }
            console.log('Connected');
        }
    );

    // 3. crud : insert
    // use backtick `` for free text
    con.query(
        `select * from products`,
        // this is fat arrow function
        (err, rows) => {
            if (err) throw err;
            // console.log(JSON.stringify(rows,null,4));
            rows.forEach(
                row => {
                    // console.log(row.ProductName);
                    //products.push({...row});
                    products.push({row});
                 //   console.log("in rows.forEach:  " + products)
                });
                //must be placed in  con.query otherwisw products refereing ot sql objects that 
                //have already been deleted products contains array of sql objects
                //on performing push i cioy reference to original sql object 
                //sql object is not created anew arefernce to it is placed in products 
               //  console.log(">>>>  " + JSON.stringify(products));
               res.end(JSON.stringify(products));
            }
    );
    console.log(">>>>  " + JSON.stringify(products));
    con.end();
    

  //  res.end(JSON.stringify(products));

});

var server = app.listen(1000, function () {
})