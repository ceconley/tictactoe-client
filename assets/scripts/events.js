const api = require('./api')
const ui = require('./ui')

// PAGE LOAD VIEW
$('#board').hide()
$('#get-games-button').hide()
$('#start-game').hide()
$('#players-button').hide()
$('#message').text('Please Sign In')

// VIEW AFTER TOKENS ARE SELECTED
const closePlayerSelection = () => {
  $('#get-games-button').show()
  $('#start-game').show()
  $('#players-button').show()
  $('#message').text('Click Start to Play')
}

// AFTER FIRST TOKEN IS SELECTED
const addHouseBack = () => {
  $('#lannister2').show()
  $('#stark2').show()
  $('#targaryen2').show()
  $('#baratheon2').show()
}
// VALUE OF EACH SQUARE ON THE BOARD - BASE 2 NUMBERS
const value = [1, 2, 4, 8, 16, 32, 64, 128, 256]

// BASE 2 NUMBERS FOR WINNING COMBINATIONS
const winScore = [7, 56, 73, 84, 146, 273, 292, 448]

// GAME STATUS ON PAGE LOAD
let gameOver = false

// PLAYERS START UNASSIGNED TO A TOKEN
const player1 = {
  house: {
    name: null,
    houseToken: null
  },
  score: 0,
  apiToken: 'X'
}

const player2 = {
  house: {
    name: null,
    houseToken: null
  },
  score: 0,
  apiToken: 'O'
}

// PLAYER 1 TOKEN SELECTION
const choosePlayer1 = (event) => {
  if (event.target.id === 'baratheon1') {
    player1.house = {
      name: 'House Baratheon',
      houseMotto: 'Ours is the Fury',
      houseToken: event.target
    }
    $('#baratheon2').hide()
    $('#modalChoosePlayer2').modal({backdrop: 'static', keyboard: false})
  } else if (event.target.id === 'lannister1') {
    player1.house = {
      name: 'House Lannister',
      houseMotto: 'Hear Me Roar!',
      houseToken: event.target
    }
    $('#lannister2').hide()
    $('#modalChoosePlayer2').modal({backdrop: 'static', keyboard: false})
  } else if (event.target.id === 'targaryen1') {
    player1.house = {
      name: 'House Targaryen',
      houseMotto: 'Fire and Blood',
      houseToken: event.target
    }
    $('#targaryen2').hide()
    $('#modalChoosePlayer2').modal({backdrop: 'static', keyboard: false})
  } else if (event.target.id === 'stark1') {
    player1.house = {
      name: 'House Stark',
      houseMotto: 'Winter is Coming',
      houseToken: event.target
    }
    $('#stark2').hide()
    $('#modalChoosePlayer2').modal({backdrop: 'static', keyboard: false})
  }
}

// PLAYER 2 TOKEN SELECTION
const choosePlayer2 = (event) => {
  if (event.target.id === 'baratheon2') {
    player2.house = {
      name: 'House Baratheon',
      houseMotto: 'Ours is the Fury',
      houseToken: event.target
    }
  } else if (event.target.id === 'lannister2') {
    player2.house = {
      name: 'House Lannister',
      houseMotto: 'Hear Me Roar!',
      houseToken: event.target
    }
  } else if (event.target.id === 'targaryen2') {
    player2.house = {
      name: 'House Targaryen',
      houseMotto: 'Fire and Blood',
      houseToken: event.target
    }
  } else if (event.target.id === 'stark2') {
    player2.house = {
      name: 'House Stark',
      houseMotto: 'Winter is Coming',
      houseToken: event.target
    }
  }
}

// TURNS TO START GAME
let currentPlayer = player1

let prevPlayer = player2

// USING PREVIOUS PLAYER FOR API CALL
const togglePrevPlayer = () => {
  if (!gameOver) {
    if (prevPlayer === player1) {
      prevPlayer = player2
    } else {
      prevPlayer = player1
    }
  }
}

// TOGGLE TURNS
const togglePlayer = () => {
  if (!gameOver) {
    if (currentPlayer === player1) {
      currentPlayer = player2
    } else {
      currentPlayer = player1
    }
    $('#message').text(currentPlayer.house.name + " 's Turn")
  }
}

// START NEW GAME
const startNewGame = () => {
  $('.cells').text('')
  player1.score = 0
  player2.score = 0
  gameOver = false
  currentPlayer = player1
  $('#message').text(currentPlayer.house.name + " 's Turn")
  $('#start-game').hide()
  $('#players-button').hide()
  $('#board').show()
}

// ADD PLAYER SCORE TO CHECK AGAINST WINNING NUMBERS
const addToScore = () => {
  if (currentPlayer === player1) {
    player1.score += value[event.target.id]
  } else {
    player2.score += value[event.target.id]
  }
}

// CHECK FOR WIN
const checkWin = () => {
  for (let i = 0; i < winScore.length; i++) {
    // check player score anded (in base 2) with any win value === win value
    if ((player1.score & winScore[i]) === winScore[i]) {
      $('#message').text(player1.house.houseMotto)
      $('#start-game').show()
      $('#players-button').show()
      addHouseBack()
      gameOver = true
    } else if ((player2.score & winScore[i]) === winScore[i]) {
      $('#message').text(player2.house.houseMotto)
      $('#start-game').show()
      $('#players-button').show()
      addHouseBack()
      gameOver = true
    }
  }
}

// CHECK FOR TIE
const checkTie = () => {
  if (player1.score + player2.score === 511 && !gameOver) {
    $('#message').text('The White Walkers Won')
    $('#start-game').show()
    $('#players-button').show()
    addHouseBack()
    gameOver = true
  }
}

// RUN ON EVERY TURN
const play = (event) => {
  if (gameOver === false) {
    if (event.target.innerHTML === '') {
      $(event.target).append(currentPlayer.house.houseToken.cloneNode())
      addToScore()
      checkWin()
      checkTie()
      togglePlayer()
      togglePrevPlayer()
    }
  }
}

// CRUD ACTIONS
// POST A NEW GAME TO THE API
const createGame = () => {
  startNewGame()
  api.newGameToApi()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFail)
}

// PATCH GAME ON API FOR EACH MOVE
const onMove = (event) => {
  play(event)
  const index = $(event.target).attr('id')
  const value = prevPlayer.apiToken
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

// GET GAME HISTORY FROM API
const getGames = () => {
  api.getGamesFromApi()
    .then(ui.onGetSuccess)
    .catch(ui.onGetFailure)
}

module.exports = {
  onMove,
  createGame,
  getGames,
  startNewGame,
  choosePlayer1,
  choosePlayer2,
  closePlayerSelection
}
