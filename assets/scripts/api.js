const config = require('./config')
const store = require('./store.js')

const newGameToApi = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const sendMoveToApi = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getGamesFromApi = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
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
