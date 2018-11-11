const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('../../lib/get-form-fields.js')

const onClick = function (event, data) {
  event.preventDefault()
  api.sendClickToApi()
  ui.playGame(event)
  console.log(data)
}

const createGame = function (event, data) {
  event.preventDefault()
  ui.startNewGame()
  api.newGametoApi()
  console.log(data)
}

module.exports = {
  onClick,
  createGame
}
