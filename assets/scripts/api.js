const baseUrl = 'https://tic-tac-toe-wdi.herokuapp.com'
const store = require('./store.js')
// const ui = require('./ui.js')

const newGametoApi = function (data) {
  console.log(data)
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
    data: {
      'game': {
        'cell': {
          'index': 0,
          'value': 'X'
        },
        'id': data.game,
        'over': false
      }
    }
  })
}

module.exports = {
  newGametoApi,
  sendClickToApi
}
