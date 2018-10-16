var mongoose = require('mongoose');

var AddCasesSchemas = new mongoose.Schema({
    status: Number,
    import_cases: String,
    case_name: String,
    welcome_msg: String,
    roles: {},
    pre_negotiation_que: {},
    agreement_terms: {},
    post_negotiation_que: {},
    scores: {},
    charts: {},
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('addCasesColn', AddCasesSchemas);
