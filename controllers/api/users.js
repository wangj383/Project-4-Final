const User = require('../../models/user');
const Request = require('../../models/request');

module.exports = {
    index,
    show,
    new: newUser,
    create,
    edit,
    update,
    delete: deleteUser,
    requestHistory
};
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
// Have not yet design the new.ejs
function newUser(req,res) {
    // res.render('users/new')
}

// create account
function create(req,res) {
    // This next line will be changed after oAuth is added
    req.body.organization = req.query.organization
    User.create(req.body)
    .then(function(newUser){
        res.json(newUser)
    })
    .catch(function(err){
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid Inputs' });
        }
        res.status(500).json({ error: 'Could not create user' });
    })
}

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

