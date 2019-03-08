var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Seminar = require('../models/SeminarSchema.js');
var Seminar_partifications = require('../models/Seminar_partifications.js');
var Cases = require('../models/AddCasesSchema.js');
var Users = require('../models/UserSchema.js');

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
            console.log('found', results)
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
    console.log('closeRegistration cealledddddddddddddddddddddd')
    let seminar_id = req.params.id;
    let isCloseRegistration = req.body.isCloseRegistration;
    if (isCloseRegistration == true){
        console.log('isCloseRegistration isCloseRegistration', seminar_id, isCloseRegistration)
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
                                    console.log('count_Seminar_partificationscount_Seminar_partifications even', count_Seminar_partifications)
                                    close_seminar_partifications_commone_fun(res, seminar_expire, seminar_id, role_1st_title_name, role_1st_pdf_name, role_2nd_title_name, role_2nd_pdf_name)
                                }
                                else if (count_Seminar_partifications % 2 != 0 && count_Seminar_partifications > 0) {
                                    console.log('count_Seminar_partificationscount_Seminar_partifications odd', count_Seminar_partifications)
                                    Users.findOne({isUserType:"Dammy"}).exec(function (err, results_dummy_user) {
                                        if (results_dummy_user){
                                            console.log('results_dummy_userresults_dummy_user', results_dummy_user)
                                            console.log('there is no partifications')
                                                var Seminar_partifications_data = new Seminar_partifications({
                                                'user_name': results_dummy_user.username,
                                                'user_id': results_dummy_user._id,
                                                'seminar_id': seminar_id,
                                            });
                                            Seminar_partifications.create(Seminar_partifications_data, async function (err, Seminar_partifications_res) {
                                                if (err){
                                                    console.log(err);
                                                }
                                                else{
                                                    console.log('dummy user added in partification')
                                                    await close_seminar_partifications_commone_fun(res, seminar_expire, seminar_id, role_1st_title_name, role_1st_pdf_name, role_2nd_title_name, role_2nd_pdf_name)
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
            //console.log('results_Seminar_partificationsresults_Seminar_partifications', results_Seminar_partifications)
            
            let set_data_to_update_even = { $set: {isUser:'User1', assign_role: role_2nd_title_name, assign_pdf: role_2nd_pdf_name } };
            let set_data_to_update_odd = { $set: {isUser:'User2', assign_role: role_1st_title_name, assign_pdf: role_1st_pdf_name } };
            
            let even_users = [];
            let odd_users = [];
            let all_Seminar_partifications_id = []
            results_Seminar_partifications.forEach((items,keys) => {
                if (keys % 2 == 0){
                //console.log('"user_id is even', items.user_id)
                even_users.push(items.user_id)
                }
                else{
                    //console.log('"user_id is odd', items.user_id)
                    odd_users.push(items.user_id)
                }
                if (items) {
                    all_Seminar_partifications_id.push(items.user_id)
                }
            })
            //console.log('even_users all_Seminar_partifications_id is', all_Seminar_partifications_id)
            //console.log('odd_users odd_users odd_users is', odd_users)
            var paired_users = [];
            if (all_Seminar_partifications_id.length > 0 ){
                //var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
                for (var i = 0; i < all_Seminar_partifications_id.length; i += 2) {
                    paired_users.push(all_Seminar_partifications_id.slice(i, i + 2));
                }
            }
            console.log('paired_users paired_users is', paired_users)

            if (even_users.length > 0){
                Seminar_partifications.updateMany({ user_id: { $in: even_users }}, set_data_to_update_even ,{ multi: true }, function (err, res_even_update) {
                    if (err) {
                        console.log('error', err);
                    } else {
                        console.log('Record mark as unread  successfully!', res_even_update);
                        //res.send("Record mark as unread  successfully!");
                    }
                });
            }
            if (odd_users.length > 0) {
                Seminar_partifications.updateMany({ user_id: { $in: odd_users }}, set_data_to_update_odd , { multi: true }, function (err, res_odd_update) {
                    if (err) {
                        console.log('error', err);
                    } else {
                        console.log('Record mark as unread  successfully!', res_odd_update);
                        //res.send("Record mark as unread  successfully!");
                    }
                });
            }

            Seminar.updateOne({ _id: seminar_id }, { $set: { "seminar_start_status": 1, "seminar_expire": seminar_expire } }, { multi: true }, function (err, updateRes) {
                if (updateRes) {
                    console.log('seminar_expire updated');
                    res.send({ success: 'seminar_expire updated' });
                }
                else {
                    console.log('seminar_expire not updated');
                    res.send({ faild: 'seminar_expire not updated' });
                }
            });
        }
        else{
            console.log('there is no results_Seminar_partifications')
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
