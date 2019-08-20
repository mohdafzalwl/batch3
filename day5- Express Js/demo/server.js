const express = require('express');
const app = express();
const Port = 5000;
const path = require('path');
const bodyParser = require('body-parser');
// connect the views folder
app.set('views', path.join(__dirname, 'views'));
//view engine
app.set('view engine', 'ejs');
//connect public folder
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//define router constants
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const productRouter = require('./routes/products');
//routes
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/products', productRouter);

//define an array
// const friends = [ 'tom', 'plant', 'smacky' ];
// app.get('/', (req, res) => {
// 	res.render('index.ejs', { friends: friends });
// });
// app.post('/', (req, res) => {
// 	console.log(req.body.name);
// 	friends.push(req.body.name);
// 	res.redirect('/');
// });

// app.get('/products', (req, res) => {
// 	res.render('products.ejs');
// });
// app.get('/login', (req, res) => {
// 	res.render('login.ejs');
// });

// app.get('/user/:id', (req, res) => {
// 	console.log(req.params.id);
// 	let user = req.params.id;
// 	res.send(`hello to ${user}`);
// });

// app.get('/home', (req, res) => {
// 	res.send('this is home page');
// });

// app.get('/premium', (req, res) => {
// 	res.send('premium page');
// });

//To listen at port 3000
app.listen(Port, () => console.log(`app is listening at port : ${Port}`));
