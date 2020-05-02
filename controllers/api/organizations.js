const Organization = require('../../models/organization');
const Request = require('../../models/request');
const User = require('../../models/user');

module.exports = {
    index,
    show,
    new: newOrganization,
    create,
    edit,
    update,
    delete: deleteOrganization
};

function index(req, res) {
    Organization.find({})
    .then(function(organizations) {
        res.json(organizations);
    })
    .catch(function(err){
        res.status(500).json({ error: true });
    });
}

// Show all info in the searched organization
function show(req, res) {
    let organization=Organization.findById(req.params.id)
    let users=User.find({organization: req.params.id})
    let requests=Request.find({organization: req.params.id})
    Promise.all([organization,users,requests])
    .then(function(results){
        return res.json(results)
    })
    .catch(function(err){
        res.status(500).json({ error: true });
    })        
}

// show only the organization info
// function show(req, res) {
//     Organization.findById(req.params.id)
//     .then(function(results){
//         return res.json(results)
//     })
//     .catch(function(err){
//         res.status(500).json({ error: true });
//     })        
// }

// Have not yet design the new.ejs
function newOrganization(req,res){
    // res.render('organizations/new')
}

// Create an organization
function create(req,res){
    Organization.create(req.body)
    .then(function(newOrganization){
        res.json(newOrganization)
    }).catch(function(err){
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid Inputs' });
        }
        res.status(500).json({ error: 'Could not create organization' });
    })
}

function edit(req,res){
    // let organization = Organization.findById(req.params.id)
    // res.render('organizations/edit, organization')
}

// Update organization information
function update(req, res) {
    Organization.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true }
    )
    .then(function(organization) {
        res.status(200).json(organization);
    })
    .catch(function(err){
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid Inputs' });
        }
        res.status(500).json({ error: 'Could not update organization' });
    })
}

function deleteOrganization(req,res) {
    Organization.findByIdAndRemove(
        req.params.id,
        req.body,
    )
    .then(function(organizations) {
        res.status(200).json(organizations);
    })
    .catch(function(err){
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid Organization ID' });
        }
        res.status(500).json({ error: 'Could not delete organization' });
    })
}
