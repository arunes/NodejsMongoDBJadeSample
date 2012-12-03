var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    surname: String,
    email: String
});

exports.User = mongoose.model('User', UserSchema);
exports.db = mongoose.connect('mongodb://localhost/nodejstest');