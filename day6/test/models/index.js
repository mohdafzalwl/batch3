const mongoose = require('mongoose');
const Url = 'mongodb://localhost:27017/wavelabs'

mongoose.connect( Url , {useNewUrlParser:true})

module.exports.Doctors = require('./doctors')

module.exports.Users = require('./user')