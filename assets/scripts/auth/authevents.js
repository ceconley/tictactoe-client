const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./authapi.js')
const authUi = require('./authui.js')

const closeModal = () => {
  $('#sign-in-success').html('')
  $('#change-password-success').html('')
  $('#sign-out-success').html('')
}

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

module.exports = {
  closeModal,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
