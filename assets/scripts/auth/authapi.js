
// const config = require('../config.js')
const store = require('../store.js')

const baseUrl = 'http://tic-tac-toe.wdibos.com'

// const signUp = data => {
//   return $.ajax({
//     url: cbaseUrl + '/sign-up',
//     method: 'POST',
//     data:  "credentials": {
//     "email": "an@example.email",
//     "password": "an example password",
//     "password_confirmation": "an example password"
//   }
// }
//   })

const signIn = data => {
  return $.ajax({
    url: baseUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = data => {
  return $.ajax({
    url: baseUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = data => {
  return $.ajax({
    url: baseUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  // signUp,
  signIn,
  changePassword,
  signOut
}
