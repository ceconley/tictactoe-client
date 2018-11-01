const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed Up Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is : ', data)
}

const signUpFailure = error => {
  $('#message').text('Signed Up Failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is : ', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed In Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is : ', data)
}

const signInFailure = error => {
  $('#message').text('Signed In Failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is : ', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#message').text('Signed Out Successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is : ', data)
}

const signOutFailure = error => {
  $('#message').text('Signed Out Failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is : ', error)
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
