const users = require('../../database').users;
const assignId = require('../../helpers/assign-id');

/**
 *
 * @param name
 * @param email
 * @param password
 * @constructor
 */
function User(name, email, password) {
  this.id = assignId(users);
  this.name = name;
  this.email = email;
  this.password = password;
  this.save();
}


User.prototype.save = function () {
  this.users.push(this); // Push the current user into the array of users
};

User.prototype.getAll = function () {
  return users; // return the array of users
};

/**
 *
 * @param id
 * @returns {boolean[]}
 */
User.prototype.getOne = function (id) {
  /**
   * loop through the users array and return the user
   * with the same id as the one passed as a parameter
   */
  return users.map(function (user) {
    return user.id === id;
  })
};

/**
 *
 * @param id
 * @param data
 */
User.prototype.update = function (id, data) {
  /**
   * Loop through the array of users and update the data
   * where the user id is equal to the id passed as a parameter
   */
  return users.map(function (user) {
    if (user.id === id) {
      user.id = data.id;
      user.name = data.name;
      user.email = data.email;
      user.password = data.password
    }
    return user;
  });
};

/**
 *
 * @param id
 * @returns {*[]}
 */
User.prototype.delete = function (id) {
  // Recreate the users array without the user referenced by the ID passed
  return users.filter(function (user) {
    return user.id !== id;
  })
};


module.exports = User;