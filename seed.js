const Organization = require('./models/organization');
const User = require('./models/user')
const Request = require('./models/request');


require('dotenv').config();
require('./config/database');

// let createdOrgs = []
// let createdUsers = []

const orgList = [
    {
        name: "General Assembly",
        email: "yvonnewjy@hotmail.com",
        phoneNum: "4168255555",
    },
    {
        name: "Slack",
        email: "yvonnewjy97@gmail.com",
        phoneNum: "4168255566",
    }
]

const userList = [
    {
        name: "drive1",
        gender: 'female',
        employee_id: '2',
        driver: true,
        car: [{
            model: "Civic",
            make: "Honda",
            year: 2018,
            color: "white",
            passengerCapacity: 4
          }],
        email: "yvonnewjy@hotmail.com",
        phoneNum: "4162342222",
        password: "1234567890"
    },
    {
        name: "rider1",
        gender: 'male',
        employee_id: '3',
        driver: false,
        email: "xiaoxiong@hotmail.com",
        phoneNum: "6479994444",
        password: "1234567890"
    },
    {
        name: "rider2",
        gender: 'have not decided',
        employee_id: '1',
        driver: false,
        email: "yyyyyyyy@hotmail.com",
        phoneNum: "6479994424",
        password: "1234567890"
    }
]

const requestList =[
    {
        pickUpTime: "Every Monday, 9am",
        pickUpAddress: "CN Tower",
        destinationAddress: "220 King Street West",
        seats: 1,
        urgent: true
    }

]
// Relationship: All users are related to the first request, and all users and request are part of the first organization
Organization.deleteMany({}, function() {
    User.deleteMany({}, function(){
        Request.deleteMany({}, function(){
            Organization.create(orgList, function(err, organizationCreated) {
                User.create(userList, function(err, usersCreated) {
                    Request.create(requestList, function(err, requestsCreated) {
                        requestsCreated[0].user.push(usersCreated[0],usersCreated[1],usersCreated[2])
                        requestsCreated[0].organization.push(organizationCreated[0])
                        requestsCreated[0].save()
                        usersCreated[0].organization.push(organizationCreated[0])
                        usersCreated[1].organization.push(organizationCreated[0])
                        usersCreated[2].organization.push(organizationCreated[0])
                        usersCreated[0].save()
                        usersCreated[1].save()
                        usersCreated[2].save()
                    })
                })
            })
        })
    })
})
