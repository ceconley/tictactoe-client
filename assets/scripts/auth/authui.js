const store = require('../store.js')

$('#change-password-button').hide()
$('#sign-out-button').hide()

const signUpSuccess = () => {
  $('#sign-in-success').html('Signed Up Successfully')
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
}

const signUpFailure = () => {
  $('#sign-in-success').html('Signed Up Failed')
  $('#sign-up')[0].reset()
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#sign-in-success').html('Signed In Successfully')
  $('#sign-in')[0].reset()
  $('#sign-up')[0].reset()
  $('#sign-in-up-button').hide()
  $('#change-password-button').show()
  $('#sign-out-button').show()
  $('#get-games-button').show()
  $('#start-game').show()
  $('#message').html('Click Start to Play')
}

const signInFailure = () => {
  $('#sign-in-success').html('Signed In Failed')
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = () => {
  $('#change-password-success').html('Password changed successfully')
  $('#change-password')[0].reset()
}

const changePasswordFailure = () => {
  $('#change-password-success').html('Error on password change')
  $('#change-password')[0].reset()
}

const signOutSuccess = () => {
  store.user = null
  $('#sign-in-up-button').show()
  $('#change-password-button').hide()
  $('#sign-out-button').hide()
  $('#get-games-button').hide()
  $('#start-game').hide()
  $('#board').hide()
  $('#message').html('Please Sign In')
}

const signOutFailure = () => {
  $('#sign-out-success').html('Signed Out Failed')
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
