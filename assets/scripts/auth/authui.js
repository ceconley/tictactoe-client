const store = require('../store.js')

$('#change-password-button').hide()
$('#sign-out-button').hide()

const clearForms = () => {
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
  $('#change-password')[0].reset()
}

const modalClose = () => {
  $('#sign-up-message').text('')
  $('#change-password-message').text('')
}

const signUpSuccess = () => {
  $('#sign-in-message').text('Signed Up Successfully')
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
}

const signUpFailure = () => {
  $('#sign-in-message').text('Signed Up Failed')
  $('#sign-up')[0].reset()
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#sign-in')[0].reset()
  $('#sign-up')[0].reset()
  $('#sign-in-up-button').hide()
  $('#change-password-button').show()
  $('#sign-out-button').show()
  $('#get-games-button').show()
  $('#start-game').show()
  $('#modalSignin').modal('hide')
  $('#modalChoosePlayer1').modal({backdrop: 'static', keyboard: false})
  $('#message').text('Click Start to Play')
  modalClose()
}

const signInFailure = () => {
  $('#sign-in-message').text('Signed In Failed')
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = () => {
  $('#change-password-message').text('Password changed successfully')
  $('#change-password')[0].reset()
}

const changePasswordFailure = () => {
  $('#change-password-message').text('Error on password change')
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
  $('#message').text('Please Sign In')
  $('#players-button').hide()
  $('#baratheon2').show()
  $('#targaryen2').show()
  $('#stark2').show()
  $('#lannister2').show()
  modalClose()
}

const signOutFailure = () => {
  $('#sign-out-message').text('Signed Out Failed')
}

module.exports = {
  clearForms,
  modalClose,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
