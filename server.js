// require in express
var express = require('express');
var faker = require('faker');

// invoke express
var app = express();

// pulls in all models from models folder (users) so we have access to them
var db = require('./models');

// creating users
app.post('/users', function (req, res) {
  // do something
  db.User.create({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    bio: faker.lorem.words().join(' '),
    email: faker.internet.email()
  }).then(function (user) {
    // sends back whatever user just got created
    res.json(user);
  });
});

// pulls users from db
app.get('/users', function (req, res) {
  // select all from user
  db.User.findAll({}).then(function (users) {
    res.json(users);
  });
  // make some queries to find by id etc...
});

// setup express to listen on a port
app.listen(8080, function () {
  // creates connection to database
  db.sequelize.sync();
});