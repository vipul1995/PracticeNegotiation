var mongoose = require('mongoose');

var Pairing_User_schema = new mongoose.Schema({
    user1: String,
    user2: String,
    pairing_token:Number,
    case_id: String,
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

module.exports = mongoose.model('Pairing_User_Details', Pairing_User_schema);
