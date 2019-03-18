var mongoose = require('mongoose');

var PollQueSchema = new mongoose.Schema({
  status: Number,  
  queType: String,
  numberQue: String,
  textQue: String, 
  scaleQue: String, 
  scaleMinVal: String, 
  scaleMaxVal: String, 
  scaleMinText: String, 
  scaleMiddleText: String, 
  scaleMaxText: String, 
  mulSingleQue: String, 
  mulSingleAns1: String, 
  mulSingleAns2: String, 
  mulSingleAns3: String, 
  mulSingleAns4: String, 
  mulSingleAns5: String, 
  mulMultipleQue: String, 
  mulMultipleAns1: String, 
  mulMultipleAns2: String, 
  mulMultipleAns3: String, 
  mulMultipleAns4: String, 
  mulMultipleAns5: String, 
  minExpectedAns: String, 
  maxExpectedAns: String,
  create_Date: String,
  updated_date: { type: Date, default: Date.now }
}, {
  versionKey: false
});

module.exports = mongoose.model('Poll_Que_Coln', PollQueSchema);
