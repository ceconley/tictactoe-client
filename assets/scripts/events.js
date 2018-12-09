const api = require('./api')
const ui = require('./ui')

$('#board').hide()
$('#get-games-button').hide()
$('#start-game').hide()
$('#choose-token-button').hide()
$('#message').html('Please Sign In')
// $('.tokens').hide()

const value = [1, 2, 4, 8, 16, 32, 64, 128, 256]
// base 2 numbers winning combinations
const winScore = [7, 56, 73, 84, 146, 273, 292, 448]

let playerScore = [0, 0]

let gameOver = false

const stark = document.createElement('img')
stark.src = 'https://i.imgur.com/d70XlET.png'
stark.height = 80
stark.width = 80
stark.id = 'Stark'

const lanister = document.createElement('img')
lanister.src = 'https://i.imgur.com/KOsYdIk.png'
lanister.height = 80
lanister.width = 80
lanister.id = 'Lanister'

const targaryen = document.createElement('img')
targaryen.src = 'https://i.imgur.com/1aYWhx3.png'
targaryen.height = 80
targaryen.width = 80
targaryen.id = 'Targaryen'

const baratheon = document.createElement('img')
baratheon.src = 'https://i.imgur.com/XBX6pRV.png'
baratheon.height = 80
baratheon.width = 80
baratheon.id = 'Baratheon'

let player1 = null

let player2 = null

let currentPlayerImage = player1

let prevPlayerImage = player2

const selectStark = () => {
  $(event.target).hide()
  if (player1 === null) {
    player1 = stark
  } else {
    player2 = stark
  }
}

const selectBaratheon = () => {
  $(event.target).hide()
  if (player1 === null) {
    player1 = baratheon
  } else {
    player2 = baratheon
  }
}

const selectLanister = () => {
  $(event.target).hide()
  if (player1 === null) {
    player1 = lanister
  } else {
    player2 = lanister
  }
}

const selectTargaryen = () => {
  $(event.target).hide()
  if (player1 === null) {
    player1 = targaryen
  } else {
    player2 = targaryen
  }
}

const togglePrevPlayerImage = () => {
  if (!gameOver) {
    if (prevPlayerImage === player1) {
      prevPlayerImage = player2
    } else {
      prevPlayerImage = player1
    }
  }
}

const togglePlayerImage = () => {
  if (!gameOver) {
    if (currentPlayerImage === player1) {
      currentPlayerImage = player2
    } else {
      currentPlayerImage = player1
    }
    $('#message').html(currentPlayerImage.id + " 's Turn")
  }
}

const tokenModalClose = () => {
  $('#message').html('Click Start to Play')
  $('.tokens').show()
}

const startNewGame = () => {
  console.log(player1)
  console.log(player2)
  $('.cells').html('')
  playerScore = [0, 0]
  gameOver = false
  currentPlayerImage = player1
  $('#message').html(currentPlayerImage.id + " 's Turn")
  $('#start-game').hide()
  $('#board').show()
}

const addToScore = () => {
  if (currentPlayerImage === player1) {
    playerScore[0] += value[event.target.id]
  } else {
    playerScore[1] += value[event.target.id]
  }
}

const checkWin = () => {
  for (let i = 0; i < winScore.length; i++) {
    // check player score anded (in base 2) with any win value === win value
    if ((playerScore[0] & winScore[i]) === winScore[i]) {
      $('#message').text(player1.id + ' Wins!')
      $('#start-game').show()
      gameOver = true
      // $('#gameOver').modal()
    } else if ((playerScore[1] & winScore[i]) === winScore[i]) {
      $('#message').text(player2.id + ' Wins!')
      $('#start-game').show()
      gameOver = true
    }
  }
}

const checkTie = () => {
  if (playerScore[0] + playerScore[1] === 511 && !gameOver) {
    $('#message').text("Cat's Game")
    $('#start-game').show()
    gameOver = true
  }
}

const play = (event) => {
  if (gameOver === false) {
    if (event.target.innerHTML === '') {
      $(event.target).append(currentPlayerImage.cloneNode())
      addToScore()
      checkWin()
      checkTie()
      togglePlayerImage()
      togglePrevPlayerImage()
    }
  }
}

const createGame = () => {
  startNewGame()
  api.newGameToApi()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFail)
}

const onMove = (event) => {
  play(event)
  const index = $(event.target).attr('id')
  const value = prevPlayerImage
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
  // chooseToken,
  tokenModalClose,
  selectTargaryen,
  selectLanister,
  selectBaratheon,
  selectStark
}
