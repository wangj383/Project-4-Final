var mongoose = require('mongoose');
const Schema = mongoose.Schema

var requestSchema = new Schema({
    user: [{type: Schema.Types.ObjectId, ref: 'User'}],
    organization: [{type: Schema.Types.ObjectId, ref: 'Organization'}],
    pickUpTime: {type: String, require: true},
    pickUpAddress: {type: String, require: true},
    destinationAddress: {type: String, require: true},
    // Will display as "seats needed" or "seats avaialble" depending on the users' identity
    seats: {type: Number, require: true},
    urgent: {type: Boolean, default: false},
    expired: {type: Boolean, default: false},
    acceptedUser: [{type: Schema.Types.ObjectId, ref: 'User'}],
    canceledUser: [{type: Schema.Types.ObjectId, ref: 'User'}],
    confirmedUser: [{type: Schema.Types.ObjectId, ref: 'User'}],
    notes: {type: String},
    // can later add in another schema of notes!
}, {
  timestamps: true
});

module.exports = mongoose.model('Request', requestSchema);