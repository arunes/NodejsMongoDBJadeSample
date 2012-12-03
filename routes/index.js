var db = require('../db');

exports.index = function (req, res) {
    db.User.find(function (err, users, count) {
        res.render('index', {
            title: 'Nodejs Test',
            users: users
        });
    });
};