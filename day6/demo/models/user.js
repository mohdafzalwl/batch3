const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: 'String',
	email: 'String'
});

const USERS = mongoose.model('USERS', 

userSchema);

module.exports = USERS;


