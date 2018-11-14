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

const sendMoveToApi = function (index, turn, gameOver) {
  return $.ajax({
    url: baseUrl + '/games/' + store.gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // contentType: 'application/json',
    data:
    {
      'game': {
        'cell': {
          'index': index,
          'value': turn
        },
        'over': gameOver
      }
    }
  })
}

module.exports = {
  newGametoApi,
  sendMoveToApi
}
