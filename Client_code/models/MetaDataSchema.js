var mongoose = require('mongoose');

var MetaDataSchema = new mongoose.Schema({
    inactive_period: {type:Number, default:30}, //In minute
});

module.exports = mongoose.model('meta_data_cln', MetaDataSchema);
