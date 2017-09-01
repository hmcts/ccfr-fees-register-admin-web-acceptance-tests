'use strict'

var request = require('request')

module.exports = function () {

  return actor({
    createUser: function (email, password) {
      request({
        uri: 'http://localhost:4551/testing-support/accounts',
        method: 'POST',
        json: {
          'email': email,
          'forename': 'Forename',
          'surname': 'Surname',
          'password': password,
          'roles': ['admin']
        }
      })
    }
  })
}
