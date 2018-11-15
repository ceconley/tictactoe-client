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

let prevTurn = players[1]

const togglePrevTurn = function () {
  if (!gameOver) {
    if (prevTurn === players[0]) {
      prevTurn = players[1]
    } else {
      prevTurn = players[0]
    }
  }
}

const toggleTurn = function () {
  if (!gameOver) {
    if (turn === players[0]) {
      turn = players[1]
    } else {
      turn = players[0]
    }
    $('#message').text(turn + " 's turn")
  }
}

$('#board').hide()

const startNewGame = function () {
  $('.cells').html('')
  playerScore = [0, 0]
  gameOver = false
  $('#message').html('Player X clicks to start')
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
      $('#message').text(players[0] + ' Wins!')
      gameOver = true
      // $('#gameOver').modal()
    } else if ((playerScore[1] & winScore[i]) === winScore[i]) {
      $('#message').text(players[1] + ' Wins!')
      gameOver = true
    }
  }
}

const checkTie = function () {
  if (playerScore[0] + playerScore[1] === 511 && !gameOver) {
    $('#message').text("Cat's Game")
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
      addToScore()
      checkWin()
      checkTie()
      toggleTurn()
      togglePrevTurn()
      hideStart()
    }
  }
}

const createGame = function () {
  startNewGame()
  api.newGameToApi()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFail)
}

const onMove = function (event) {
  play(event)
  const index = $(event.target).attr('id')
  const value = prevTurn
  const over = gameOver
  const data = {
    game: {
      cell: {
        index,
        value
      },
      over
    }
  }
  api.sendMoveToApi(data)
    .then(ui.onMoveSuccess)
    .catch(ui.onMoveFailure)
}

const getGames = function () {
  api.getGamesFromApi
    .then(ui.onGetSuccess)
    .catch(ui.onGetFailure)
}

module.exports = {
  onMove,
  createGame,
  getGames
}
