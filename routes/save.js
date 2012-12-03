var db = require('../db');

exports.process = function (req, res) {

    var user = new db.User();

    user.name = req.body.name;
    user.surname = req.body.surname;
    user.email = req.body.email;

    var result = '';
    var details = '';
    user.save(function (err) {
        if (err) {
            result = 'Hata!';
            details = err;
        } else {
            result = 'Eklendi!';
            details = 'Kayıt başarılı..';
        }

        res.render('save', { title: 'Nodejs Test', result: result, details: details });
    }); 
};