const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

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
  organization: {type: Schema.Types.ObjectId, ref: 'Organization'},
  employee_id: String,
  name: {type: String, require: true},
  gender: {type: String},
  driver: {type: Boolean, require: true, default: false},
  car: [carSchema],
  email: {type: String, require: true},
  phoneNum: {type: String, require: true},
  password: String,
}, {
  timestamps: true
});


userSchema.set('toJSON', {
  transform: function(doc,ret) {
    delete ret.password;
    return ret
  }
})

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
}


module.exports = mongoose.model('User', userSchema);