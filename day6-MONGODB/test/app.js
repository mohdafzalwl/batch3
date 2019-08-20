const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//route constants
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const productRouter = require('./routes/products');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//routes config

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);

//routes
app.get('/jade', (req, res) => {
	res.render('test');
});

app.listen(port, () => console.log(`port is running at ${port}`));
