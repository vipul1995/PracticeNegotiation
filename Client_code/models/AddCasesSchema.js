var mongoose = require('mongoose');

var AddCasesSchemas = new mongoose.Schema({
    status: Number,
        import_cases: String,
        case_name: String,
        caseTypes:{},
        welcome_msg: String,
        roles: {},
        pre_negotiation_que: {},
        agreement_terms: {},
        post_negotiation_que: {},
        scores: {},
        charts: {},
        debriefingVideos:{},
        debriefingPdf:{},
        create_Date: String,
        updated_date: { type: Date, default: Date.now },
    }, 
    {
        versionKey: false
    }
);

module.exports = mongoose.model('add_Cases_Coln', AddCasesSchemas);
