var mongoose = require('mongoose');

var PollQueSchema = new mongoose.Schema({
    status: Number,  
    que: String,
    ans1: String,
    ans2: String,
    ans3: String,
    ans4: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PollQueColn', PollQueSchema);
