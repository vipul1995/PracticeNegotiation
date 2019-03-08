var express = require('express');
var router = express.Router();
var session = require('express-session');
var nodeMailer = require('nodemailer');
var user = require('../models/UserSchema');
var CasesSchema = require('../models/AddCasesSchema.js');
var InviteUsers = require('../models/InviteUsersSchema.js');
var Create_DateVar = require('../models/Create_Date.js');

//To send mail for reset password
router.post('/', function (req, res, next) {
    var email = req.body.email_id.toLowerCase();
    var subject = req.body.subject;
    var message = req.body.message;
    var case_id = req.body.case_id;
    var user_id = req.body.user_id;
    var pairing_token = req.body.pairing_token;

    console.log('your data is',req.body);
    CasesSchema.findById(case_id, function (err, cases) {              //
        if (cases) {
            console.log('case found');
            var saveinvitedata = new InviteUsers({
                'user_id': user_id,
                'case_id': case_id,
                'create_Date': Create_DateVar.create_Date
            });

            console.log('the register data is', saveinvitedata);
            InviteUsers.create(saveinvitedata, function (err, post) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('gootted', post)
                }
            });

            if (email != '' || subject != '' || message != '') {

                let transporter = nodeMailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'info.practicenegotiation@gmail.com',
                        pass: '@@practice@@1'
                    }
                });
                let mailOptions = {
                    from: 'info.practicenegotiation@gmail.com', // sender address
                    to: email, // list of receivers
                    subject: subject, // Subject line
                    text: message, // plain text body
                    html: '<b>Dear User,</b>' + '<br/>' + '<br/>' +
                        'You have requested a password reset, please follow the link below to reset your password.' + '<br/>' +
                        'Please ignore this email if you did not request a password change.' + '<br/>' +
                        'Follow this link to reset your password.' + '<br/>' + '<br/>' +
                        'http://52.56.239.248:8091/horizontal/dashboard/inviteusers/case_id=' + case_id + '/token=' + pairing_token
                };
                console.log(mailOptions);
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message %s sent: %s');
                    //res.render('index');
                });
                res.send({ success: true, success: 'mail sended' });
            }
            else {
                res.send({ success: true, failed: 'mail not sended' });
            }
        }
        else{
            console.log('case not found');
            res.send({ success: false, failed: 'case found' });
        }
    });
});

module.exports = router;
