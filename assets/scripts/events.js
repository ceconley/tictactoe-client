const api = require('./api')
const ui = require('./ui')

// beginning page state
$('#board').hide()
$('#get-games-button').hide()
$('#start-game').hide()
$('#players-button').hide()
$('#message').text('Please Sign In')

const closePlayerSelection = () => {
  $('#get-games-button').show()
  $('#start-game').show()
  $('#players-button').show()
  $('#message').text('Click Start to Play')
}

const addHouseBack = () => {
  $('#lannister2').show()
  $('#stark2').show()
  $('#targaryen2').show()
  $('#baratheon2').show()
}
// value of each square on board
const value = [1, 2, 4, 8, 16, 32, 64, 128, 256]

// base 2 numbers winning combinations
const winScore = [7, 56, 73, 84, 146, 273, 292, 448]

// game status on page load
// let playerScore = [0, 0]
let gameOver = false

// players start unassigned to a token
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

// player token selection
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

let currentPlayer = player1

let prevPlayer = player2

const togglePrevPlayer = () => {
  if (!gameOver) {
    if (prevPlayer === player1) {
      prevPlayer = player2
    } else {
      prevPlayer = player1
    }
  }
}

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

const addToScore = () => {
  if (currentPlayer === player1) {
    player1.score += value[event.target.id]
  } else {
    player2.score += value[event.target.id]
  }
}

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

const checkTie = () => {
  if (player1.score + player2.score === 511 && !gameOver) {
    $('#message').text('The White Walkers Won')
    $('#start-game').show()
    $('#players-button').show()
    addHouseBack()
    gameOver = true
  }
}

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

// post a new game to the api
const createGame = () => {
  startNewGame()
  api.newGameToApi()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFail)
}

// patch game on api for each move
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

// get game history from api
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
