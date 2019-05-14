const users = require('../../database').users;
const assignId = require('../../helpers/assign-id');
const User = require('./user');

function Admin(name, email, password) {
  User.call(name, email, password);
  this.id = assignId(users);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.save = function () {
  // Push the new users object into the users array
  users.push(this);
};
