var mongoose = require('mongoose');

var InviteUsersSchema = new mongoose.Schema({
        user_id: String,
        case_id: String,
        create_Date: String
    }, 
    {
        versionKey: false
    }
);

module.exports = mongoose.model('invite_Users_Coln', InviteUsersSchema);
