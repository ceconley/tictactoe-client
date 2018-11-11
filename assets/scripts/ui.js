
// base number of base 2
const value = [1, 2, 4, 8, 16, 32, 64, 128, 256]
// base 2 numbers winning combinations
const winScore = [7, 56, 73, 84, 146, 273, 292, 448]
let playerScore = [0, 0]
let gameOver = false
const players = ['X', 'O']
let turn = players[0]

const toggleTurn = function () {
  if (turn === players[0]) {
    turn = players[1]
  } else {
    turn = players[0]
  }
}
$('#board').hide()

// change reset button to  play-again button
// when clicked:
//  send call to api to post new game
//  set board/logic conditions to start a new game

// Patch game:
//  different values will have to trigger different push's to the cells array

// const newGame = function () {
//   playerScore = [0, 0]
//   gameOver = false
//   $('.cells').empty() }

const reset = function () {
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
  $('.reset').hide()
}

const startNewGame = function (event) {
  reset()
  $('#board').show()
  // tied to play-again button
  // reset board
  // make post call to application
}

const playGame = function (event) {
  if (gameOver === false) {
    // place marker in square
    if (event.target.innerHTML !== 'X' && event.target.innerHTML !== 'O') {
      $('#' + event.target.id).html(turn)
      // add to value to current player's score
      if (turn === 'X') {
        playerScore[0] += value[event.target.id]
      } else {
        playerScore[1] += value[event.target.id]
      }
      // Check for win
      for (let i = 0; i < winScore.length; i++) {
        // check player score anded (in base 2) with any win value === win value
        if ((playerScore[0] & winScore[i]) === winScore[i]) {
          $('h5').text(players[0] + ' Wins!')
          gameOver = true
          // $('#gameOver').modal()
        } else if ((playerScore[1] & winScore[i]) === winScore[i]) {
          $('h5').text(players[1] + ' Wins!')
          gameOver = true
          // $('#gameOver').modal()
        }
      }
      // Stops reclick- does double toggle
    } else {
      toggleTurn()
    }
  }
  // Change turn
  if (!gameOver) {
    toggleTurn()
    $('h5').text(turn + " 's turn")
  }
  // Cat's game
  if (playerScore[0] + playerScore[1] === 511 && !gameOver) {
    $('h5').text("Cat's Game")
    gameOver = true
  }
  // Hide reset button
  if (gameOver) {
    $('.reset').show()
  } else {
    $('.reset').hide()
  }
}

module.exports = {
  playGame,
  reset,
  startNewGame
}
