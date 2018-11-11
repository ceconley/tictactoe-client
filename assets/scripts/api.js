const baseUrl = 'https://tic-tac-toe-wdi.herokuapp.com'
const store = require('./store.js')

const newGametoApi = function (data) {
  return $.ajax({
    url: baseUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const sendClickToApi = function (data) {
  return $.ajax({
    url: baseUrl + '/games:id',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  newGametoApi,
  sendClickToApi
}
