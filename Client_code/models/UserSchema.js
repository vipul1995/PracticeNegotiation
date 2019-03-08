// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    isUserType:{type:String, default:'Regular'},
    isAdmin:{type:Number, default:0},
    username: { type: String},
    email_id: { type: String, lowercase: true},
    conPassword: { type: String },
    resetPasswordToken: {type: String},
    skill_level:{type: String},
    create_Date: String
  },
  {
    versionKey: false
  }
);

userSchema.statics.findByName = function(username, cb) {
  return this.find({ username: username }, cb);
};

// the schema is useless so far
// we need to create a model using it
var UserSchema = mongoose.model('users_Credential', userSchema);

// make this available to our users in our Node applications
module.exports = UserSchema;