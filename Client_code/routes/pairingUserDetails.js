var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pairing_User_schema = require('../models/Pairing_User_schema.js');
var MetaDataSchema = require('../models/MetaDataSchema.js');
var Create_DateVar = require('../models/Create_Date.js');
var AddCases = require('../models/AddCasesSchema.js');
var moment = require('moment');
var io = require('../socketEvents.js');

// io.soketIO.on('connection', (socket) => {
//     //Map: id -> name of the user
//     console.log('lllllllllllllllllllllllllllll user has connected');
//})

/* GET ALL BOOKS */
router.get('/', function (req, res, next) {
    Pairing_User_schema.find(function (err, results) {
        if (err) return next(err);
        res.json(results);
    });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function (req, res, next) {
    Pairing_User_schema.findById(req.params.id, function (err, results) {
        if (err) return next(err);
        res.json(results);
    });
});

router.put('/checkPairingTokenAvl/:case_id', function (req, res, next) {
    console.log('case_idcase_idcase_id')
    let case_id = req.params.case_id,
        pairing_token = req.body.pairing_token;
        Pairing_User_schema.findOne({case_id:case_id, pairing_token:pairing_token}).exec(function (err,tokanRes) {
            if (tokanRes) {
                console.log('token avl');
                res.send({success:'found'})
            }
            else
            {
                console.log('token not avl');
                res.send({failed:'not found'})
            }
        })        
})

/* SAVE BOOK */
router.post('/', async function (req, res, next) {
    var now = moment();
    let current_date_time = now.format("YYYY-MM-DD hh:mm:ss a");
    console.log('finalTime finalTime finalTime finalTime', current_date_time)

    var user_id = req.body.user_id;
    var case_id = req.body.case_id;
    var pairing_token = req.body.pairing_token;

    Pairing_User_schema.find({
        $or: [{ user1: user_id, "user1_last_activity_date_time": { $gt: new Date().getTime() - (1000 * 60 * 30) } }, { user2: user_id, "user2_last_activity_date_time": { $gt: new Date().getTime() - (1000 * 60 * 30) } }],
        $and: [{ "is_status": { $in: [0, 1] } }]
    }).exec()
        .then((resultsFindCon1) => {
            if (resultsFindCon1.length > 0) {
                console.log('condition1 found', resultsFindCon1)                
            }
            else if (resultsFindCon1.length == 0) {
                console.log('condition1 not found')     
                Pairing_User_schema.find({case_id: case_id, "user1_last_activity_date_time": { $gt: new Date().getTime() - (1000 * 60 * 30) }, is_status: 1 }).exec()
                    .then((resultsFindCon2) => {
                        if (resultsFindCon2.length > 0) {
                            console.log('condition2 found', resultsFindCon2)
                            let set_data_to_update = {
                                'pairing_token':undefined,
                                'user2': user_id,
                                'is_status': 2,
                                'user2_last_activity_date_time': new Date(),
                                'session_start_time': current_date_time
                            }
                            Pairing_User_schema.updateOne({pairing_token: pairing_token, case_id: case_id }, set_data_to_update, { multi: true }, function (err, resultsUpdate) {
                                if (err) {
                                    console.log(err)
                                }
                                else {
                                    console.log('update', resultsUpdate)
                                    resultsFindCon2.forEach(items=>{
                                        io.soketIO.sockets.in(items.user1).emit('pairing event occur', 'Go to pairing page');
                                        io.soketIO.sockets.in(user_id).emit('pairing event occur', 'Go to pairing page');
                                    })
                                    res.send({ success: 'success' })
                                }
                            })
                        }
                        else if (resultsFindCon2.length == 0) {
                            console.log('condition2 not found')
                            var registerData = new Pairing_User_schema({
                                'user1': user_id,
                                'case_id': case_id,
                                'pairing_token': pairing_token,
                                'start_time': current_date_time,
                                'inactive_period': 30,
                                'is_status': 1,
                                'user1_last_activity_date_time': new Date()
                            });
                            Pairing_User_schema.create(registerData, function (err, resultsInsert) {
                                if (err) {
                                    console.log('not inserted', err)
                                    res.send({ failed: 'not inserted' })
                                }
                                else {
                                    console.log('inserted', resultsInsert)
                                    res.send({ success: 'inserted', results: resultsInsert })
                                }
                            });

                        }
                        else {
                            console.log('something wrong')

                        }
                    })
                    .catch((err) => {
                    })           
            }
            else {
                console.log('something wrong')                
            }
        })
        .catch((err) => {
            console.log('error',err)
        })
});

/* UPDATE BOOK */
router.put('/:id', function (req, res, next) {
    Pairing_User_schema.findByIdAndUpdate(req.params.id, req.body, function (err, results) {
        if (err) return next(err);
        res.json(results);
    });
});

/* DELETE BOOK */
router.delete('/:id', function (req, res, next) {
    Pairing_User_schema.findByIdAndRemove(req.params.id, req.body, function (err, results) {
        if (err) return next(err);
        res.json(results);
    });
});

module.exports = router;
