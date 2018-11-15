const baseUrl = 'https://tic-tac-toe-wdi.herokuapp.com'
const store = require('./store.js')
// const ui = require('./ui.js')

const newGameToApi = function (data) {
  return $.ajax({
    url: baseUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const sendMoveToApi = function (data) {
  return $.ajax({
    url: baseUrl + '/games/' + store.gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getGamesFromApi = function () {
  return $.ajax({
    url: baseUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGameToApi,
  sendMoveToApi,
  getGamesFromApi
}
