const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./authapi.js')
const authUi = require('./authui.js')

const onSignUp = event => {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  authApi.signOut(data)
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
