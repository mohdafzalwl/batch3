//connection file
const mongoose = require('mongoose');

//connect
mongoose.connect('mongodb://localhost/wavelabs4', 
{ useNewUrlParser: true });

//import the collection
module.exports.USERS = require('./user');
module.exports.PRODUCTS = require('./product')
