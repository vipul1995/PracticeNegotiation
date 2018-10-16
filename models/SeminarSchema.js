var mongoose = require('mongoose');

var SeminarSchema = new mongoose.Schema({
    status: Number,
    seminar_name: String,
    seminar_id: String,
    seminar_pin: String,
    reading_time: String,
    nego_time: String,
    seminar_cases: String,
    welcome_msg: String,
    auto_log_order: Boolean,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('createSeminarColn', SeminarSchema);
