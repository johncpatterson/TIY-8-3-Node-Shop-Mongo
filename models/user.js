var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String, 
	age: Number,
	likejs: Boolean,
	id: Number,
});

module.exports = mongoose.model('User', userSchema);