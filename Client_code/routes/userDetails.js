var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/UserSchema.js');
var Create_DateVar = require('../models/Create_Date.js');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');
const jwt = require('jsonwebtoken')
var config = require('../config/main');


/* GET ALL BOOKS */
router.get('/', function (req, res, next) {
    Users.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function (req, res, next) {
    Users.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/******** CHECK EMAIL EXIST OR NOT ******** */
router.post('/checkEmailId', function (req, res, next) {
    let userEmail = {email_id: req.body.inputEmail.toLowerCase()}
    Users.findOne(userEmail, function (err, users) {
        if (err) {
            console.log("error occured",err);
            res.send({ success: false, failed: 'error occured' });
        }
        //if user found.
        else if (users) {
            console.log('EMAIL already exists');    
            res.send({ success: false, failed: 'EMAIL already exists' });
        }
        else
        {
            console.log('Email available'); 
            res.send({ success: false, message: 'Email available' });
        }
    });
});

/* SAVE BOOK */
router.post('/', function (req, res, next) {

    var sign_up_useremail = req.body.email_id;
    bcrypt.hash(req.body.conPassword, null, null, function (err, hash) {
        if(err){
            console.log(err);
        }
        else{
            console.log('pwd is',hash);
        }
        var registerData = new Users({
            'username': req.body.username,
            'email_id': sign_up_useremail.toLowerCase(),
            'conPassword': hash,
            'skill_level': req.body.skill_level,
            'create_Date': Create_DateVar.create_Date
        });
    
        console.log('the register data is', registerData);
        Users.create(registerData, function (err, post) {
            if (err){
                console.log(err);
            }
            else{
                console.log('gootted', post)
                res.json(post);
            }
        });
    });
});

/* UPDATE BOOK */
router.put('/:id', function (req, res, next) {
    Users.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE BOOK */
router.delete('/:id', function (req, res, next) {
    Users.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


/************************************ USER LOGIN WORK*********************************************** */

/* SAVE BOOK */
router.post('/logins', function (req, res, next) {
    console.log('user details is',req.body);

    var sign_in_useremail = req.body.email_id;
    var findemail = { "email_id": sign_in_useremail.toLowerCase() };
    console.log(findemail);
    var password = {"conPassword":req.body.password};
    Users.findOne(findemail, function (err, users) {
        if (users) 
        {
            console.log('user gotted',users);
            bcrypt.compare(req.body.password, users.conPassword, function (err, result) {
                if(result){
                    console.log('going to set session');
                    req.session.Users = users;
                    console.log('sesion set now', req.session.Users);
                    var token = jwt.sign(users.toJSON(), config.secret, { expiresIn: 7200 });
                    res.send({ success: true, message: 'success', 'usersdata': users, token: token });
                }
                else{
                        console.log('password not match');
                        res.send({ success: false, failed: 'not match' });
                    }
            })
        }
        else{
            console.log('user not found');
            res.send({ success: false, failed: 'not match' });
        }
    });
});

// for check jwt token
router.get('/checkSession/sessionGotted/:token', function (req, res, next) {
    let token = req.params.token;
    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) 
            {
                res.send({ success: false, failed: 'not match' });
            } else 
            {
                console.log('user data is');
                res.status(200).send({ users_details: decoded, message: "login user" });
            }
        });
    } 
    else 
    {
        console.log('not here');
        res.send({ success: false, failed: 'not match' });
    }
});

//logout the account
router.post('/checkSession/logout', function (req, res, next) {
    console.log('logout api calleds');
    if(req.session.destroy())
    {
        res.send({ sessionData: 'good' });
    }
    else
    {
        res.send({ success: false, failed: 'not match' });
    }
   
});

module.exports = router;
