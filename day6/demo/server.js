const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path');
const bodyParser = require('body-parser');
const  methodOverride = 
require('method-override')

app.use(methodOverride('_method'))

//setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// override with POST having ?_method=DELETE
//body parser config
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//import routes
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const productRouter = require('./routes/product')
//route paths
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/products', productRouter)

app.listen(PORT, () => console.log(`server is running at ${PORT}`));
