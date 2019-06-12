//import dependencies
const express = require('express');
const app  = express();
var connection = require('./config');
var session = require('express-session');
var bodyParser = require('body-parser');

//var registerControll = require('./controllers/registerController');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(require('flash')());

//app.post('/register',registerControll.register);

app.listen(3000, ()=>{
    console.log("Listening at 3000");
})

/*app.post('/signup', function(req, res){
    
        
    connection.query('INSERT INTO users (username, email, password, ) VALUES (?,?,?)', [req.body.email, req.body.password, req.body.username], function(err, rows){
    if (err){
        console.log(err);
        req.flash("error", "Database error");
         res.redirect("/signup");
     } else {
         req.flash("success", "Registration was successful.");   
        res.redirect("/login");
     }
    })

});

*/



/*app.get('/users', function(request, response){
	const name = 'admin';
	const password = 'admin';
	//connection.query('select * from users WHERE username = ? AND password = ?', [username, password], function(error, results, fields){
        db.query('select * from users', function(error, results, fields){
        if(error) console.log(error);

        else{
            console.log(results);
            response.send(results);

        }

  });
}); 
*/