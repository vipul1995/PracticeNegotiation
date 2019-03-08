var mongoose = require('mongoose');

var Seminar_partifications = new mongoose.Schema({
    user_name:String,
    user_id: String,
    seminar_id: String,
    isUser:String,
    assign_role:String,
    assign_pdf:String,
    updated_date: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Seminar_partifications_coln', Seminar_partifications);
