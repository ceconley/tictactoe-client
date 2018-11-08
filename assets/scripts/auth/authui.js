const store = require('../store.js')

$('#change-password-button').hide()
$('#sign-out-button').hide()

const signUpSuccess = function () {
  $('#sign-in-success').text('Signed Up Successfully')
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
}

const signUpFailure = function () {
  $('#sign-in-success').text('Signed Up Failed')
  $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-in-success').text('Signed In Successfully')
  $('#sign-in')[0].reset()
  $('#sign-up')[0].reset()
  $('#sign-in-up-button').hide()
  $('#change-password-button').show()
  $('#sign-out-button').show()
}

const signInFailure = function () {
  $('#sign-in-success').text('Signed In Failed')
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = function () {
  $('#change-password-success').text('Password changed successfully')
  $('#change-password')[0].reset()
}

const changePasswordFailure = function () {
  $('#change-password-success').text('Error on password change')
  $('#change-password')[0].reset()
}

const signOutSuccess = function () {
  $('#sign-out-success').text('Signed Out Successfully')
  store.user = null
  $('#sign-in-up-button').show()
  $('#change-password-button').hide()
  $('#sign-out-button').hide()
}

const signOutFailure = function () {
  $('#sign-out-success').text('Signed Out Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
