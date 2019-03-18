var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserSchema = require('../models/UserSchema');
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');

/* GET ALL S */
router.get('/', function (req, res, next) {
    UserSchema.find({}).sort({ 'updated_date': -1 }).exec(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE users BY ID */
router.get('/:id', function (req, res, next) {
    UserSchema.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/****************FOR ADMIN REGISTER****************** */
/* SAVE BOOK */
// router.post('/', function (req, res, next) {
//     console.log('form data is',req.body);
//     var sign_up_useremail = req.body.useremail;
//     var isAdmin = req.body.isAdmin;
//     bcrypt.hash(req.body.userpassword, null, null, function (err, hash) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log('pwd is', hash);
//         }
//         var registerData = new UserSchema({
//             'isAdmin': isAdmin,
//             'email_id': sign_up_useremail,
//             'conPassword': hash,
//             'create_Date': Create_DateVar.create_Date
//         });

//         console.log('the register data is', registerData);
//         registerData.save( function (err, post) {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('gootted', post)
//                 res.json(post);
//             }
//         });
//     });
// });

/* SAVE BOOK */
router.post('/', function (req, res, next) {
    console.log('user details is', req.body);

    var sign_in_useremail = req.body.useremail;
    var findemail = { "email_id": sign_in_useremail.toLowerCase() };
    console.log(findemail);
    var password = { "conPassword": req.body.userpassword };
    var isAdmin = req.body.isAdmin;
    UserSchema.findOne(findemail, function (err, users) {
        console.log('check the admin', users.isAdmin);
        console.log('check the admin', isAdmin);
        if (users.isAdmin == 1) { 
            if (users) {
                console.log('user gotted', users);
                bcrypt.compare(req.body.userpassword, users.conPassword, function (err, result) {
                    
                    if(err)
                    {
                        res.send({ success: false, failed: 'not match' });
                    }
                    else{
                        console.log('error nhi hai', result);
                        if (result) 
                        {
                            console.log('password match');
                            console.log('going to set session');
                            req.session.UserSchema = users;
                            console.log('sesion set now', req.session.UserSchema);
                            res.send({ success: true, message: 'Loaded fruits', 'usersdata': users });
                        }
                        else 
                        {
                            console.log('password not match');
                            res.send({ success: false, failed: 'not match' });
                        }
                    }
                })
            }
            else {
                console.log('user not found');
                res.send({ success: false, failed: 'not match' });
            }
        }
        else {
            console.log('You are not admin');
            res.send({ success: false, failed: 'not match' });
        }
    });
});

router.get('/checkSession/sessionGotted', function (req, res, next) {
    console.log('api called');

    // let responceAdmin = req.session.UserSchema;
    // res.send({ sessionData: responceAdmin });
    let responceAdmin = {
        "email_id": "vipul.webnexus@gmail.com",
        "isAdmin": 1,
        "_id": "5bd3f51efe5d700920c3175b",
        "conPassword": "$2a$10$WNbCrRHnLZ.IOX/sVnqoauGu9SMQcLG4NNXzbB9kiNpZYmraZeI2O",
        "create_Date": "27 October 2018"
    }
    if (!responceAdmin == '') {
        console.log('session avl');
        res.send({ sessionData: responceAdmin });
    }
    else if (responceAdmin == '') {
        console.log('session avl not');
        res.send({ success: false, failed: 'not match' });
    }
    else {
        console.log('session avl not');
        res.send({ success: false, failed: 'not match' });
    }
});


router.post('/checkSession/logout', function (req, res, next) {
    console.log('logout api calleds');
    if (req.session.destroy()) {
        res.send({ sessionData: 'good' });
    }
    else {
        res.send({ success: false, failed: 'not match' });
    }

});

/* UPDATE users */
router.put('/:id', function (req, res, next) {
    UserSchema.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE users */
router.delete('/:id', function (req, res, next) {
    UserSchema.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
