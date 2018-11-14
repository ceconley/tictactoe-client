const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('../../lib/get-form-fields.js')

const value = [1, 2, 4, 8, 16, 32, 64, 128, 256]
// base 2 numbers winning combinations
const winScore = [7, 56, 73, 84, 146, 273, 292, 448]

let playerScore = [0, 0]

let gameOver = false

const players = ['X', 'O']

let turn = players[0]

let index = 0

const toggleTurn = function () {
  if (!gameOver) {
    if (turn === players[0]) {
      turn = players[1]
    } else {
      turn = players[0]
    }
    $('h5').text(turn + " 's turn")
  }
}

$('#board').hide()

const startNewGame = function () {
  $('#0').html('')
  $('#1').html('')
  $('#2').html('')
  $('#3').html('')
  $('#4').html('')
  $('#5').html('')
  $('#6').html('')
  $('#7').html('')
  $('#8').html('')
  playerScore = [0, 0]
  gameOver = false
  $('h5').html('Player X clicks to start')
  turn = players[0]
  $('#start-game').hide()
  $('#board').show()
}

const addToScore = function () {
  if (turn === 'X') {
    playerScore[0] += value[event.target.id]
  } else {
    playerScore[1] += value[event.target.id]
  }
}

const checkWin = function () {
  for (let i = 0; i < winScore.length; i++) {
    // check player score anded (in base 2) with any win value === win value
    if ((playerScore[0] & winScore[i]) === winScore[i]) {
      $('h5').text(players[0] + ' Wins!')
      gameOver = true
      // $('#gameOver').modal()
    } else if ((playerScore[1] & winScore[i]) === winScore[i]) {
      $('h5').text(players[1] + ' Wins!')
      gameOver = true
    }
  }
}

const checkTie = function () {
  if (playerScore[0] + playerScore[1] === 511 && !gameOver) {
    $('h5').text("Cat's Game")
    gameOver = true
  }
}

const hideStart = function () {
  if (gameOver === false) {
    $('#start-game').hide()
  } else {
    $('#start-game').show()
  }
}

const play = function (event) {
  if (gameOver === false) {
    if (event.target.innerHTML !== 'X' && event.target.innerHTML !== 'O') {
      $('#' + event.target.id).html(turn)
      index = event.target
      addToScore()
      checkWin()
      checkTie()
      toggleTurn()
      hideStart()
    }
  }
}

// const gameData = {
//   'game': {
//     'cell': {
//       'index': event.target.id,
//       'value': turn
//     },
//     'over': gameOver
//   }
// }

const createGame = function () {
  startNewGame()
  api.newGametoApi()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFail)
}

const onMove = function (event) {
  play(event)
  api.sendMoveToApi(index, turn, gameOver)
    .then(ui.onMoveSuccess)
    .catch(ui.onMoveFailure)
}

module.exports = {
  onMove,
  createGame
}
