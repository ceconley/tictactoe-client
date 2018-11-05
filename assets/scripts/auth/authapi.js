
// const config = require('../config.js')
const store = require('../store.js')

const baseUrl = 'https://tic-tac-toe-wdi.herokuapp.com'

const signUp = data => {
  return $.ajax({
    url: baseUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  console.log(data)
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
  signUp,
  signIn,
  changePassword,
  signOut
}
