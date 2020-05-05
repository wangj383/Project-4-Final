var mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

var organizationSchema = new Schema({
  name: {type: String, require: true},
  email: {type: String, require: true},
  phoneNum: {type: String, require: true},
  address: {type: String, require: true},
  password: {type: String, require: true},
}, {
  timestamps: true
});

organizationSchema.set('toJSON', {
  transform: function(doc,ret) {
    delete ret.password;
    return ret
  }
})

organizationSchema.pre('save', function(next) {
  const organization = this;
  if (!organization.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(organization.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    organization.password = hash;
    next();
  });
});

organizationSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
}

module.exports = mongoose.model('Organization', organizationSchema);