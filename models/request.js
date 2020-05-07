var mongoose = require('mongoose');
const Schema = mongoose.Schema

var requestSchema = new Schema({
    organization: {type: Schema.Types.ObjectId, ref: 'Organization'},
    title: {type: String, require: true},
    pickUpTime: {type: String, require: true},
    pickUpAddress: {type: String, require: true},
    destinationAddress: {type: String, require: true},
    // Will display as "seats needed" or "seats avaialble" depending on the users' identity
    seats: {type: Number},
    urgent: {type: Boolean, default: false},
    expired: {type: Boolean, default: false},
    driver: {type: Schema.Types.ObjectId, ref: 'User'},
    rider: [{type: Schema.Types.ObjectId, ref: 'User'}],
    notes: {type: String},
    host:{type: Schema.Types.ObjectId, ref: 'User'}
    // can later add in another schema of notes!
}, {
  timestamps: true
});

module.exports = mongoose.model('Request', requestSchema);