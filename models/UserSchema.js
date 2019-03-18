// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
        isUserType:{type:String, default:'Regular'},
        username: { type: String},
        email_id: { type: String,lowercase: true },
        conPassword: { type: String},
        resetPasswordToken: { type: String },
        skill_level: { type: String },
        isAdmin: { type: Number, default: 0 },
        create_Date: String,
        updated_date: { type: Date, default: Date.now }
    },
    {
        versionKey: false
    }
);

userSchema.statics.findByName = function (username, cb) {
    return this.find({ username: username }, cb);
};

// the schema is useless so far
// we need to create a model using it
var UserSchema = mongoose.model('users_Credential', userSchema);

// make this available to our users in our Node applications
module.exports = UserSchema;