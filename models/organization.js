var mongoose = require('mongoose');
const Schema = mongoose.Schema

var organizationSchema = new Schema({
  name: {type: String, require: true},
  email: {type: String, require: true},
  phoneNum: {type: String, require: true},
}, {
  timestamps: true
});

module.exports = mongoose.model('Organization', organizationSchema);