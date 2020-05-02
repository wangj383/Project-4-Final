const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    model: {type: String, require: true},
    make: {type: String, require: true},
    year: {type: Number, require: true},
    color: {type: String, require: true},
    passengerCapacity:{type: Number, require: true}
  }, {
    timestamps: true
  });
  
const userSchema = new Schema({
  organization: [{type: Schema.Types.ObjectId, ref: 'Organization'}],
  name: {type: String, require: true},
  gender: {type: String},
  driver: {type: Boolean, require: true},
  car: [carSchema],
  email: {type: String, require: true},
  phoneNum: {type: String, require: true},
  notes: {type: String}
//   ****NEED TO THINK ABOUT THIS!
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);