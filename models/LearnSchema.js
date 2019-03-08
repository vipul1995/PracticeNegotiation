var mongoose = require('mongoose');

var LearnSchema = new mongoose.Schema({
    learnTitle: String,
    learnMessage: String,
    create_Date: String,
    updated_date: { type: Date, default: Date.now }
}, {
    versionKey: false
});
module.exports = mongoose.model('Learn_Coln', LearnSchema);
