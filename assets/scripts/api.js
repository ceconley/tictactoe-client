const baseUrl = 'http://tic-tac-toe.wdibos.com'
const store = require('../store.js')

const newGametoApi = function () {
  return $.ajax({
    url: baseUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const send0ClickToApi = function (data) {
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
  send0ClickToApi
}
