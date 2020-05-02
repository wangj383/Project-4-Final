const Organization = require('../../models/organization');
const Request = require('../../models/request');
const User = require('../../models/user');

module.exports = {
    index
};

function index(req,res) {
    res.render('api/index');
}