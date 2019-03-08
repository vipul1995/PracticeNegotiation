var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Seminar = require('../models/SeminarSchema.js');
var Seminar_partifications = require('../models/Seminar_partifications.js');
var Pairing_seminar_user_schema = require('../models/Pairing_seminar_user_schema.js');
var Cases = require('../models/AddCasesSchema.js');
var io = require('../socketEvents.js');
var moment = require('moment');

/* GET ALL SeminarS */
router.get('/', function (req, res, next) {
    Seminar.find({}).sort({ 'updated_date': -1 }).exec(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE Seminar BY ID */
router.get('/:id', function (req, res, next) {
    Seminar.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE Seminar */
router.post('/', function (req, res, next) {
    var create_Date = new Date().toLocaleString('en-US', { month: "short", day: "numeric", year: "numeric" })
    const formData = req.body;
    const createDate = { create_Date: create_Date };
    const finalParams = { ...formData, ...createDate };
    console.log(finalParams);

    Seminar.create(finalParams, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


/* UPDATE Seminar */
router.put('/:id', function (req, res, next) {
    Seminar.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE Seminar */
router.delete('/:id', function (req, res, next) {
    Seminar.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


/* API FOR CHANGE WELCOME MESSAGE IN SEMINAR SECTION */
router.put('/updateWelcome_msg/:id', function (req, res, next) {
    let id = req.params.id;
    let welcome_msg = req.body.welcome_msg;
    console.log('updateWelcome_msgupdateWelcome_msg', id, welcome_msg)
    Seminar.updateOne({ _id: id }, { $set: { "welcome_msg": welcome_msg } }, { multi: true }, function (err, post) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('welcome_msg updated');
            res.send('welcome_msg updated');
        }
    });
});

/* API FOR CHANGE READING TIME IN SEMINAR SECTION */
router.put('/updateReading_time/:id', function (req, res, next) {
    let id = req.params.id;
    let reading_time = req.body.reading_time;
    console.log('reading_timereading_time', id, reading_time)

    Seminar.updateOne({ _id: id }, { $set: { "reading_time": reading_time } }, { multi: true }, function (err, post) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('reading_time updated');
            res.send('reading_time updated');
        }
    });
});

/* API FOR CHANGE NEGOTIATION TIME IN SEMINAR SECTION */
router.put('/updateNego_time/:id', function (req, res, next) {
    let id = req.params.id;
    let nego_time = req.body.nego_time;
    console.log('nego_timenego_time', id, nego_time)

    Seminar.updateOne({ _id: id }, { $set: { "nego_time": nego_time } }, { multi: true }, function (err, post) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('nego_time updated');
            res.send('nego_time updated');
        }
    });
});

router.post('/verify_seminar_pin', function (req, res, next) {
    let seminar_id_enter = req.body.seminar_id_enter,
        Entered_Seminar_Pin = req.body.Entered_Seminar_Pin,
        user_id = req.body._id,
        username = req.body.username;
    console.log('user_iduser_id ', user_id)
    console.log('Seminar_id isssssssssssssss', Entered_Seminar_Pin)
    
    Seminar.findOne({ "seminar_id": seminar_id_enter}, function (err, results) {
        if (results) {
            if (results.seminar_pin === Entered_Seminar_Pin){
                console.log('pin found', results)
                console.log('is_active_seminar', results.is_active_seminar)
                if (results.is_active_seminar == 1) {
                    console.log('seminar also in active condition')
                    //seminar_pairing(user_id, results.seminar_cases, username)
                    Seminar_partifications.findOne({ "seminar_id": results._id, user_id:user_id}, function (err, Seminar_partifications_exist) {
                        if (Seminar_partifications_exist) {
                            console.log('already there is partifications')
                            res.send({ success: 'pin found with active seminar', seminar_data: results, seminarActiveStatus:true})
                        }
                        else
                        {
                            console.log('there is no partifications')
                                var Seminar_partifications_data = new Seminar_partifications({
                                'user_name': username,
                                'user_id': user_id,
                                'seminar_id': results._id,
                            });
                            Seminar_partifications.create(Seminar_partifications_data, function (err, Seminar_partifications_res) {
                                if (err){
                                    console.log(err);
                                }
                                else{
                                    console.log('gootted')
                                    res.send({ success: 'pin found with active seminar', seminar_data: results, seminarActiveStatus:true})
                                }
                            });
                        }
                    })
                    
                }
                else{
                    console.log('seminar not active condition')
                    res.send({ failedNotActive: 'pin found but not active seminar', seminarActiveStatus:false})
                }
            }
            else{
                console.log('pin not found')
                res.send({ failedPin: 'pin not found' })
            }            
        }
        else {
            console.log('Seminar_id not found')
            res.send({ failedSeminarId: 'Seminar_id not found'})
        }
    })
})

function seminar_pairing(user_id, case_id, username) {
    console.log('username called', username)
    console.log('seminar_pairing called', user_id, case_id)
    var now = moment();
    let current_date_time = now.format("YYYY-MM-DD hh:mm:ss a");
    console.log('finalTime finalTime finalTime finalTime', current_date_time)

    Pairing_seminar_user_schema.find({
        $or: [{ user1: user_id, "user1_last_activity_date_time": { $gt: new Date().getTime() - (1000 * 60 * 30) } }, { user2: user_id, "user2_last_activity_date_time": { $gt: new Date().getTime() - (1000 * 60 * 30) } }],
        $and: [{ "is_status": { $in: [0, 1] } }]
    }).exec()
        .then((resultsFindCon1) => {
            if (resultsFindCon1.length > 0) {
                console.log('condition1 found', resultsFindCon1)                
            }
            else if (resultsFindCon1.length == 0) {
                console.log('condition1 not found')     
                Pairing_seminar_user_schema.find({ case_id: case_id, "user1_last_activity_date_time": { $gt: new Date().getTime() - (1000 * 60 * 30) }, is_status: 1 }).exec()
                    .then((resultsFindCon2) => {
                        if (resultsFindCon2.length > 0) {
                            console.log('condition2 found', resultsFindCon2)
                            let set_data_to_update = {
                                'user2': user_id,
                                'is_status': 2,
                                'user2_last_activity_date_time': new Date(),
                                'session_start_time': current_date_time
                            }
                            Pairing_seminar_user_schema.updateOne({ case_id: case_id }, set_data_to_update, { multi: true }, function (err, resultsUpdate) {
                                if (err) {
                                    console.log(err)
                                }
                                else {
                                    console.log('update', resultsUpdate)
                                    resultsFindCon2.forEach(items=>{
                                        io.soketIO.sockets.in(items.user1).emit('pairing event occur', 'Go to pairing page');
                                        io.soketIO.sockets.in(user_id).emit('pairing event occur', 'Go to pairing page');
                                    })
                                    //res.send({ success: 'success' })
                                }
                            })
                        }
                        else if (resultsFindCon2.length == 0) {
                            console.log('condition2 not found')
                            var registerData = new Pairing_seminar_user_schema({
                                'user1': user_id,
                                'case_id': case_id,
                                'start_time': current_date_time,
                                'inactive_period': 30,
                                'is_status': 1,
                                'user1_last_activity_date_time': new Date()
                            });
                            Pairing_seminar_user_schema.create(registerData, function (err, resultsInsert) {
                                if (err) {
                                    console.log('not inserted', err)
                                   // res.send({ failed: 'not inserted' })
                                }
                                else {
                                    console.log('inserted', resultsInsert)
                                   // res.send({ success: 'inserted', results: resultsInsert })
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
}
/* GET ALL SeminarS */
router.put('/get_pdf_doc/:user_id', function (req, res, next) {
    var user_id = req.params.user_id;
    var seminar_id = req.body.seminar_id;
    Seminar_partifications.findOne({ user_id: user_id, seminar_id:seminar_id}).exec(function (err, results_seminar_partifications) {
        if (results_seminar_partifications) {
            console.log('File UploadedFile Uploaded', results_seminar_partifications)
            Seminar.findOne({ "_id": results_seminar_partifications.seminar_id}, function (err, results_seminar) {
                if (results_seminar) {
                    console.log('seminar found')
                    if (results_seminar.seminar_expire){
                        let reading_time_counter = checkPdfReadRemailTimeFun(results_seminar.seminar_expire)
                        console.log('reading_time_counterreading_time_counter', reading_time_counter)
                        res.send({ success: 'record found', assign_roles:results_seminar_partifications.assign_role, file: `http://52.56.239.248:8090/uploads/RolePdf/` + results_seminar_partifications.assign_pdf, results_seminar:results_seminar, reading_time_counter:reading_time_counter });                    
                    }
                    else{
                        res.send({ success: 'record found', assign_roles:results_seminar_partifications.assign_role, file: `http://52.56.239.248:8090/uploads/RolePdf/`+ results_seminar_partifications.assign_pdf, results_seminar:results_seminar});                    
                    }
                }
                else {
                    res.send({ failed: 'not found'})
                }
            })            
        }
        else {
            console.log('not found', err)
        }
    });
});

function checkPdfReadRemailTimeFun(pdf_read_expired_time) {
    console.log('pdf_read_expired_timepdf_read_expired_time', pdf_read_expired_time)
    let current_time = new Date();
    let reading_time_counter = '';
    var t = pdf_read_expired_time - current_time;
    if (t > 0) {
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        var convert_sec = minutes * 60;
        var final_res = convert_sec + seconds;
        reading_time_counter = final_res;
        
        console.log('convert_secconvert_sec', convert_sec)
        console.log('minutesminutes', minutes)
        console.log('secondsseconds', seconds)
        console.log('final_res final_res', final_res)
    }
    return reading_time_counter;
}

router.get('/closeRegistration_socket/newone', function (req, res, next) {
    console.log('closeRegistration_socketcloseRegistration_socket', io.soketIO)
    io.soketIO.emit('refresh privateMessages', { success: 'important' });
});
module.exports = router;
