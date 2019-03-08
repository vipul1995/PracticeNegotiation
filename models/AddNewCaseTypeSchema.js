var mongoose = require('mongoose');

var AddNewCaseTypeSchema = new mongoose.Schema({
        status: Number,
        caseTypeName:String,
        create_Date: String,
        updated_date: { type: Date, default: Date.now }
    }, 
    {
        versionKey: false
    }
);

module.exports = mongoose.model('AddNew_Case_Type_Coln', AddNewCaseTypeSchema);
