var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Seminar = require('../models/SeminarSchema.js');
var Seminar_partifications = require('../models/Seminar_partifications.js');
var Pairing_seminar_user_schema = require('../models/Pairing_seminar_user_schema.js');
var Cases = require('../models/AddCasesSchema.js');
var Users = require('../models/UserSchema.js');
var moment = require('moment');
var Promise = require("bluebird");

/* GET ALL SeminarS */
router.get('/', function (req, res, next) {
    Seminar.find({}).sort({ 'updated_date': -1 }).exec(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE Seminar BY ID */
router.get('/:id', function (req, res, next) {
    Seminar.findById(req.params.id, function (err, results) {
        if (results) {
            console.log('found')
            res.send({success:'found', responce:results});
        }
        else{
            console.log('not found')
            res.send({failed:'not found'});
        }
    });
});

/* SAVE Seminar */
router.post('/', function (req, res, next) {
    var create_Date = new Date().toLocaleString('en-US', { month: "short", day: "numeric", year: "numeric" })
    const formData = req.body;
    const createDate = { create_Date: create_Date};
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

/* API FOR CHANGE NEGOTIATION TIME IN SEMINAR SECTION */
router.put('/start_seminar/:startSeminarId', function (req, res, next) {
    console.log('start_seminar cealled')
    let seminar_id = req.params.startSeminarId;
    if (seminar_id) {
        console.log('seminar_id seminar_id', seminar_id)
        Seminar.findOne({_id:seminar_id}).exec(function (err, results) {
            if (results) {
                console.log('foundddddddd', results)
                Seminar.updateOne({ _id: seminar_id}, { $set: {"is_active_seminar":1 } }, { multi: true }, function (err, updateRes) {
                    if (updateRes) {
                        console.log('updated');
                        res.send({success:'updated'});
                    }
                    else {
                        console.log('not updated');
                        res.send({faild:'not updated'});
                    }
                });
            }
            else{
                console.log('not found')
            }
        });
    }
});

/* API FOR CHANGE NEGOTIATION TIME IN SEMINAR SECTION */
router.put('/closeRegistration/:id', function (req, res, next) {
    let seminar_id = req.params.id;
    let isCloseRegistration = req.body.isCloseRegistration;
    if (isCloseRegistration == true){
        Seminar.findOne({_id:seminar_id}).exec(function (err, results) {
            if (results) {
                let case_id = results.seminar_cases;
                var d = new Date()
                let seminar_expire = d.setMinutes(d.getMinutes() + results.reading_time);
                Cases.findOne({_id:case_id}).exec(function (err, results_cases) {
                    if (results_cases){
                        let role_1st_title_name = '';
                        let role_1st_pdf_name = '';
                        let role_2nd_title_name = '';
                        let role_2nd_pdf_name = '';
                        results_cases.roles.forEach((items_role, key_role) => {
                            if (key_role % 2 == 0){
                                role_2nd_title_name = items_role.title;
                                role_2nd_pdf_name = items_role.rolePdfName;
                            }
                            else{
                                role_1st_title_name = items_role.title;
                                role_1st_pdf_name = items_role.rolePdfName;
                            }
                        })
                        //console.log('role_1st_title_name', role_1st_title_name)
                        //console.log('role_1st_pdf_name', role_1st_pdf_name)
                        //console.log('role_2nd_title_name', role_2nd_title_name)
                        //console.log('role_2nd_pdf_name', role_2nd_pdf_name)
                        Seminar_partifications.find({seminar_id:seminar_id}).count().exec(function (err, count_Seminar_partifications) {
                            if(err){
                                console.log('error')
                            }
                            else{ 
                                if (count_Seminar_partifications % 2 == 0 && count_Seminar_partifications > 0) {
                                    close_seminar_partifications_commone_fun(res, seminar_expire, seminar_id, role_1st_title_name, role_1st_pdf_name, role_2nd_title_name, role_2nd_pdf_name)
                                    seminar_pairing(case_id, seminar_id)
                                }
                                else if (count_Seminar_partifications % 2 != 0 && count_Seminar_partifications > 0) {
                                    Users.findOne({isUserType:"Dammy"}).exec(function (err, results_dummy_user) {
                                        if (results_dummy_user){
                                                var Seminar_partifications_data = new Seminar_partifications({
                                                'email_id': results_dummy_user.email_id,
                                                'user_id': results_dummy_user._id,
                                                'seminar_id': seminar_id,
                                            });
                                            Seminar_partifications.create(Seminar_partifications_data, async function (err, Seminar_partifications_res) {
                                                if (err){
                                                    console.log(err);
                                                }
                                                else{
                                                    if (Seminar_partifications_res){
                                                        await close_seminar_partifications_commone_fun(res, seminar_expire, seminar_id, role_1st_title_name, role_1st_pdf_name, role_2nd_title_name, role_2nd_pdf_name)
                                                        await seminar_pairing(case_id, seminar_id)
                                                    }
                                                }
                                            });
                                        }
                                        else{
                                            console.log('error')
                                        }
                                    })
                                } 
                                else{
                                    console.log('there is no partifications')
                                }                               
                            }
                        })
                    }
                    else{
                        console.log('results_casesresults_cases not')
                    }
                })
                
            }
            else{
                console.log('not found')
            }
        });
    }
});

/* FUNCTION FOR CLOSE SEMINAR PARTIFICATION */
function close_seminar_partifications_commone_fun(res, seminar_expire, seminar_id, role_1st_title_name, role_1st_pdf_name, role_2nd_title_name, role_2nd_pdf_name) {
    Seminar_partifications.find({seminar_id:seminar_id}).exec(function (err, results_Seminar_partifications) {
        if (results_Seminar_partifications){
            let set_data_to_update_even = { $set: {isUser:'User1', assign_role: role_2nd_title_name, assign_pdf: role_2nd_pdf_name } };
            let set_data_to_update_odd = { $set: {isUser:'User2', assign_role: role_1st_title_name, assign_pdf: role_1st_pdf_name } };
            
            let even_users = [];
            let odd_users = [];
            results_Seminar_partifications.forEach((items,keys) => {
                if (keys % 2 == 0){
                    even_users.push(items.user_id)
                }
                else{
                    odd_users.push(items.user_id)
                }
                
            })
            
            if (even_users.length > 0){
                Seminar_partifications.updateMany({ user_id: { $in: even_users }}, set_data_to_update_even ,{ multi: true }, function (err, res_even_update) {
                    if (err) {
                        console.log('error', err);
                    } else {
                        //console.log('Record mark as unread  successfully!', res_even_update);
                        //res.send("Record mark as unread  successfully!");
                    }
                });
            }
            if (odd_users.length > 0) {
                Seminar_partifications.updateMany({ user_id: { $in: odd_users }}, set_data_to_update_odd , { multi: true }, function (err, res_odd_update) {
                    if (err) {
                        console.log('error', err);
                    } else {
                        //console.log('Record mark as unread  successfully!', res_odd_update);
                        //res.send("Record mark as unread  successfully!");
                    }
                });
            }

            Seminar.updateOne({ _id: seminar_id }, { $set: { "seminar_start_status": 1, "seminar_expire": seminar_expire } }, { multi: true }, function (err, updateRes) {
                if (updateRes) {
                    //console.log('seminar_expire updated');
                    res.send({ success: 'seminar_expire updated' });
                }
                else {
                    //console.log('seminar_expire not updated');
                    res.send({ faild: 'seminar_expire not updated' });
                }
            });
        }
        else{
            console.log('there is no results_Seminar_partifications')
        }
    })
}

/* API FOR  PAIRING USERS FOR NEGOTIATION */
function seminar_pairing(case_id, seminar_id) {
    console.log('seminar_pairingseminar_pairingseminar_pairing')
    var now = moment();
    let current_date_time = now.format("YYYY-MM-DD hh:mm:ss a");

    Seminar_partifications.find({seminar_id: seminar_id}).exec(function (err, results_Seminar_partifications) {
        if (results_Seminar_partifications){
            return Promise.each(results_Seminar_partifications, items => {
                    console.log('forEachforEachforEachforEachforEach', items.email_id)
                
                return Pairing_seminar_user_schema.findOne({
                    $or: [{ user1: items.user_id, "user1_last_activity_date_time": { $gt: new Date().getTime() - (1000 * 60 * 30) } }, { user2: items.user_id, "user2_last_activity_date_time": { $gt: new Date().getTime() - (1000 * 60 * 30) } }],
                    $and: [{ "is_status": { $in: [0, 1] } }]
                }).exec()
                    .then((resultsFindCon1) => {
                        if (resultsFindCon1 != null) {
                            console.log('condition1 found')
                            //res.send({isUserFoundCond1st:resultsFindCon1})                          
                        }
                        else if (resultsFindCon1 == null) {
                            console.log('condition1 not found')     
                            return Pairing_seminar_user_schema.findOne({case_id: case_id, "user1_last_activity_date_time": { $gt: new Date().getTime() - (1000 * 60 * 30) }, is_status: 0 }).exec()
                                .then((resultsFindCon2) => {
                                    console.log('condition2 found')
                                    if (resultsFindCon2) {
                                        console.log('if part is true')
                                        let set_data_to_update = {
                                            'is_status':1,
                                            'email_user2': items.email_id,
                                            'user2': items.user_id,
                                            'user2_last_activity_date_time': new Date(),
                                            'session_start_time': current_date_time
                                        }
                                        return Pairing_seminar_user_schema.updateOne({_id:resultsFindCon2._id, case_id: case_id }, set_data_to_update, { multi: true }).exec()
                                                .then((resultsUpdate) => {
                                                    console.log('update')                                                
                                                    //io.soketIO.sockets.in(update_user).emit('pairing event occur', 'Go to pairing page');
                                                    //io.soketIO.sockets.in(user_id).emit('pairing event occur', 'Go to pairing page');
                                                    // resultsFindCon2.forEach(items=>{
                                                    //     io.soketIO.sockets.in(items.user1).emit('pairing event occur', 'Go to pairing page');
                                                    //     io.soketIO.sockets.in(user_id).emit('pairing event occur', 'Go to pairing page');
                                                    // })
                                                    //res.send({ isUserUpdate: 'success' })
                                                })                                    
                                    }
                                    else {
                                            console.log('condition2 not found')
                                            const registerData = new Pairing_seminar_user_schema({
                                                'user1': items.user_id,
                                                'email_user1': items.email_id,
                                                'case_id': case_id,
                                                'seminar_id': seminar_id,
                                                'start_time': current_date_time,
                                                'inactive_period': 30,
                                                'is_status': 0,
                                                'user1_last_activity_date_time': new Date()
                                            });

                                            return registerData.save()
                                                .then((someValue) => {
                                                    console.log('saved');
                                                })
                                                .catch((err) => {
                                                    console.log('not saved:' + err);
                                                });                                                                               
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
            })                                        
        }
        else{
            console.log('error')
        }
    })  
}

/* API FOR CHANGE NEGOTIATION TIME IN SEMINAR SECTION */
router.put('/end_seminar/:id', function (req, res, next) {
    console.log('closeRegistration cealled')
    let seminar_id = req.params.id;
    if (seminar_id) {
        console.log('isCloseRegistration isCloseRegistration', seminar_id)
        Seminar.findOne({_id:seminar_id}).exec(function (err, results) {
            if (results) {
                console.log('foundddddddd', results)
                Seminar.updateOne({ _id: seminar_id}, { $set: {"current_active_seminar":undefined, "seminar_start_status":0, "seminar_expire": undefined } }, { multi: true }, function (err, updateRes) {
                    if (updateRes) {
                        console.log('updated');
                        res.send({success:'updated'});
                    }
                    else {
                        console.log('not updated');
                        res.send({faild:'not updated'});
                    }
                });
            }
            else{
                console.log('not found')
            }
        });
    }
});
module.exports = router;
