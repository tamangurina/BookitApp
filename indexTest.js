//import dependencies
const express = require('express');
const app  = express();
const mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
const port = 5000;

// start the server
app.set('port', process.env.port || port);
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookit'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
module.exports = db; 

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.get('/users', function(request, response){
	const name = 'admin';
	const password = 'admin';
	/*connection.query('select * from users WHERE username = ? AND password = ?', [username, password], function(error, results, fields){*/
        db.query('select * from users', function(error, results, fields){
        if(error) console.log(error);

        else{
            console.log(results);
            response.send(results);

        }

  });
});