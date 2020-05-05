const User = require('../../models/user');
const Request = require('../../models/request');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    signup,
    login,
    index,
    show,
    // new: newUser,
    // create,
    edit,
    update,
    delete: deleteUser,
    requestHistory,
};

async function signup(req,res) {
    const user = new User(req.body)
    try {
        await user.save()
        res.json(user)
    } catch(err) {
        res.status(400).json(err)
    }
}


async function login(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email
      });
      if (!user) return res.status(401).json({
        err: 'bad credentials'
      });
      user.comparePassword(req.body.pw, (err, isMatch) => {
        if (isMatch) {
          const token = createJWT(user);
          res.json({
            token
          });
        } else {
          return res.status(401).json({
            err: 'bad password'
          });
        }
      });
    } catch (err) {
      return res.status(401).json(err);
    }
}

function createJWT(user) {
    return jwt.sign({
      user
    }, SECRET, {
      expiresIn: '24h'
    });
  }
  

function index(req, res) {
    // This next line will be changed after oAuth is added
    var organization = req.query.organization
    User.find({organization: organization })
    .then(function(users) {
        res.json(users);
    })
    .catch(function(err){
        res.status(500).json({ error: true });
    });
}

// show selective user info
function show(req, res) {
    User.findById(req.params.id)
    .then(function(user){
        res.json(user)
    })
}
// // Have not yet design the new.ejs
// function newUser(req,res) {
//     // res.render('users/new')
// }

// // create account
// function create(req,res) {
//     // This next line will be changed after oAuth is added
//     req.body.organization = req.query.organization
//     User.create(req.body)
//     .then(function(newUser){
//         res.json(newUser)
//     })
//     .catch(function(err){
//         if (err.name === 'ValidationError') {
//             return res.status(400).json({ error: 'Invalid Inputs' });
//         }
//         res.status(500).json({ error: 'Could not create user' });
//     })
// }

function edit(req,res){
    // let user= User.findById(req.params.id)
    // res.render('users/edit, user')
}

function update(req, res) {
    User.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true }
    )
    .then(function(users) {
        res.status(200).json(users);
    })
    .catch(function(err){
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid Inputs' });
        }
        res.status(500).json({ error: 'Could not update user' });
    })
}

// Should later design to only be able to delete personal info 
function deleteUser(req,res) {
    User.findByIdAndRemove(
        req.params.id,
        req.body,
    )
    .then(function(users) {
        res.status(200).json(users);
    })
    .catch(function(err){
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid User ID' });
        }
        res.status(500).json({ error: 'Could not delete user' });
    })
}

function requestHistory(req,res) {
    Request.find({user: req.params.id})
    .populate('user')
    .populate('acceptedUser')
    .populate('canceledUser')
    .populate('confirmedUser')
    .then(function(requests) {
        res.status(200).json(requests);
    })
    .catch(function(err){
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid User ID' });
        }
        res.status(500).json({ error: 'Could not delete user' });
    })
}

