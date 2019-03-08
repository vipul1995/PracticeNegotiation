var mongoose = require('mongoose');

var SeminarSchema = new mongoose.Schema({
    status: Number,
    seminar_name: String,
    seminar_id: String,
    seminar_pin: String,
    reading_time: Number,
    nego_time: Number,
    seminar_cases: String,
    welcome_msg: String,
    auto_log_order: Boolean,
    create_Date:String,
    is_active_seminar:{ type: Number, default:0 },
    seminar_start_status:{ type: Number, default:0 },
    seminar_expire:{ type: Date },
    updated_date: { type: Date, default: Date.now }
}, 
    {
        versionKey: false
    }
);

module.exports = mongoose.model('create_Seminar_Coln', SeminarSchema);
