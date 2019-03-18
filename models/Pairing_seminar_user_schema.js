var mongoose = require('mongoose');

var Pairing_seminar_user_schema = new mongoose.Schema({
    user1: String,
    email_user1:String,
    user2: String,
    email_user2: String,
    case_id: String,
    seminar_id: String,
    start_time: String,
    inactive_period: Number,
    is_status: {type:Number, default:0},
    user1_last_activity_date_time:Date,
    user2_last_activity_date_time: Date,
    session_start_time:String
},
    {
        versionKey: false
    }
);

module.exports = mongoose.model('Pairing_seminar_User_Details', Pairing_seminar_user_schema);
