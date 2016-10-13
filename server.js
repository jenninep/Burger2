var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var sequelize = require('sequelize');

var SeqBurger = require('./models').SeqBurger;
SeqBurger.sync();

// var sequelize = require('sequelize'),
// 	connection;
// 	if (process.env.JAWSDB_URL) {
// 		connection = new sequelize('burgers2_db', 'root', 'password', {
// 			host: 'localhost',
// 			dialect: 'mysql',
// 			port: '3000'
// 		})
// 	}
var app = express();
app.use('/static',express.static('public/assets'));
var port = process.env.PORT || 3000;
app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




//Serve static content for the app from the "public" directory in the application directory.


app.get('/', function(req, res){
	SeqBurger.findAll({}).then(function(sq_data)
{
		res.render('index', {
			burgers: sq_data
		})
	}).catch(function(err){
		if (err) {
			throw err;
		}
	})
});

app.post('/create', function(req, res){
	SeqBurger.create({
		name: req.body.name,
		devoured: false
	}).then(function(seq_response) {
		res.redirect('/')
	}).catch(function(err) {
		throw err;
	})
});





app.put('/update', function(req,res){
	SeqBurger.findOne({
		where: {
			id: req.body.id,
		}
	}).then(function updateBurger(sq_burger){
		console.log(sq_burger);
		sq_burger.update({
			devoured:true
		}).then(function(arg){
			res.redirect('/');
		});
	});
});

app.delete('/delete', function(req,res){
	// myConnection.query('DELETE FROM burgers WHERE ?', [{devoured:true}, {id:req.body.id}], function(err, response){
	// 	if(err)throw err;
	// 	res.redirect('/');

	// });
	SeqBurger.findOne({
		where: {
			id: req.body.id,
		}
	}).then(function deleteBurger(del_burger){
		console.log(del_burger);
		del_burger.destroy({
			devoured:true
		}).then(function(another_arg){
			res.redirect('/');
		});
	});
});


app.listen(port, function(){
	console.log("app is listening");
})