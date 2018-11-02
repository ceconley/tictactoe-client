
const value = [1, 2, 4, 8, 16, 32, 64, 128, 256]
const winScore = [7, 56, 73, 84, 146, 273, 292, 448]
const playerScore = [0, 0]
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

const handleSuccessResponse0 = function () {
  if (!gameOver) {
    $('#0').html(turn)
    if (turn === 'X') {
      playerScore[0] += value[0]
    } else {
      playerScore[1] += value[0]
    }
    for (let i = 0; i < winScore.length; i++) {
      if ((playerScore[0] & winScore[i]) === winScore[i]) {
        $('h5').text(players[0] + ' Wins!')
        gameOver = true
      } else if ((playerScore[1] & winScore[i]) === winScore[i]) {
        $('h5').text(players[1] + ' Wins!')
        gameOver = true
      }
    }
  }
  if (!gameOver) {
    toggleTurn()
    $('h5').text(turn + " 's turn")
  }
}
const handleFailureResponse0 = function (response) {
  console.log(response)
}

const handleSuccessResponse1 = function () {
  if (!gameOver) {
    $('#1').html(turn)
    if (turn === 'X') {
      playerScore[0] += value[1]
    } else {
      playerScore[1] += value[1]
    }
    for (let i = 0; i < winScore.length; i++) {
      if ((playerScore[0] & winScore[i]) === winScore[i]) {
        $('h5').text(players[0] + ' Wins!')
        gameOver = true
      } else if ((playerScore[1] & winScore[i]) === winScore[i]) {
        $('h5').text(players[1] + ' Wins!')
        gameOver = true
      }
    }
  }
  if (!gameOver) {
    toggleTurn()
    $('h5').text(turn + " 's turn")
  }
}
const handleFailureResponse1 = function (response) {
  console.log(response)
}

const handleSuccessResponse2 = function () {
  if (!gameOver) {
    $('#2').html(turn)
    if (turn === 'X') {
      playerScore[0] += value[2]
    } else {
      playerScore[1] += value[2]
    }
    for (let i = 0; i < winScore.length; i++) {
      if ((playerScore[0] & winScore[i]) === winScore[i]) {
        $('h5').text(players[0] + ' Wins!')
        gameOver = true
      } else if ((playerScore[1] & winScore[i]) === winScore[i]) {
        $('h5').text(players[1] + ' Wins!')
        gameOver = true
      }
    }
  }
  if (!gameOver) {
    toggleTurn()
    $('h5').text(turn + " 's turn")
  }
}
const handleFailureResponse2 = function (response) {
  console.log(response)
}

const handleSuccessResponse3 = function () {
  if (!gameOver) {
    $('#3').html(turn)
    if (turn === 'X') {
      playerScore[0] += value[3]
    } else {
      playerScore[1] += value[3]
    }
    for (let i = 0; i < winScore.length; i++) {
      if ((playerScore[0] & winScore[i]) === winScore[i]) {
        $('h5').text(players[0] + ' Wins!')
        gameOver = true
      } else if ((playerScore[1] & winScore[i]) === winScore[i]) {
        $('h5').text(players[1] + ' Wins!')
        gameOver = true
      }
    }
  }
  if (!gameOver) {
    toggleTurn()
    $('h5').text(turn + " 's turn")
  }
}
const handleFailureResponse3 = function (response) {
  console.log(response)
}

const handleSuccessResponse4 = function () {
  if (!gameOver) {
    $('#4').html(turn)
    if (turn === 'X') {
      playerScore[0] += value[4]
    } else {
      playerScore[1] += value[4]
    }
    for (let i = 0; i < winScore.length; i++) {
      if ((playerScore[0] & winScore[i]) === winScore[i]) {
        $('h5').text(players[0] + ' Wins!')
        gameOver = true
      } else if ((playerScore[1] & winScore[i]) === winScore[i]) {
        $('h5').text(players[1] + ' Wins!')
        gameOver = true
      }
    }
  }
  if (!gameOver) {
    toggleTurn()
    $('h5').text(turn + " 's turn")
  }
}
const handleFailureResponse4 = function (response) {
  console.log(response)
}

const handleSuccessResponse5 = function () {
  if (!gameOver) {
    $('#5').html(turn)
    if (turn === 'X') {
      playerScore[0] += value[5]
    } else {
      playerScore[1] += value[5]
    }
    for (let i = 0; i < winScore.length; i++) {
      if ((playerScore[0] & winScore[i]) === winScore[i]) {
        $('h5').text(players[0] + ' Wins!')
        gameOver = true
      } else if ((playerScore[1] & winScore[i]) === winScore[i]) {
        $('h5').text(players[1] + ' Wins!')
        gameOver = true
      }
    }
  }
  if (!gameOver) {
    toggleTurn()
    $('h5').text(turn + " 's turn")
  }
}
const handleFailureResponse5 = function (response) {
  console.log(response)
}

const handleSuccessResponse6 = function () {
  if (!gameOver) {
    $('#6').html(turn)
    if (turn === 'X') {
      playerScore[0] += value[6]
    } else {
      playerScore[1] += value[6]
    }
    for (let i = 0; i < winScore.length; i++) {
      if ((playerScore[0] & winScore[i]) === winScore[i]) {
        $('h5').text(players[0] + ' Wins!')
        gameOver = true
      } else if ((playerScore[1] & winScore[i]) === winScore[i]) {
        $('h5').text(players[1] + ' Wins!')
        gameOver = true
      }
    }
  }
  if (!gameOver) {
    toggleTurn()
    $('h5').text(turn + " 's turn")
  }
}
const handleFailureResponse6 = function (response) {
  console.log(response)
}

const handleSuccessResponse7 = function () {
  if (!gameOver) {
    $('#7').html(turn)
    if (turn === 'X') {
      playerScore[0] += value[7]
    } else {
      playerScore[1] += value[7]
    }
    for (let i = 0; i < winScore.length; i++) {
      if ((playerScore[0] & winScore[i]) === winScore[i]) {
        $('h5').text(players[0] + ' Wins!')
        gameOver = true
      } else if ((playerScore[1] & winScore[i]) === winScore[i]) {
        $('h5').text(players[1] + ' Wins!')
        gameOver = true
      }
    }
  }
  if (!gameOver) {
    toggleTurn()
    $('h5').text(turn + " 's turn")
  }
}
const handleFailureResponse7 = function (response) {
  console.log(response)
}

const handleSuccessResponse8 = function () {
  if (!gameOver) {
    $('#8').html(turn)
    if (turn === 'X') {
      playerScore[0] += value[8]
    } else {
      playerScore[1] += value[8]
    }
    for (let i = 0; i < winScore.length; i++) {
      if ((playerScore[0] & winScore[i]) === winScore[i]) {
        $('h5').text(players[0] + ' Wins!')
        gameOver = true
      } else if ((playerScore[1] & winScore[i]) === winScore[i]) {
        $('h5').text(players[1] + ' Wins!')
        gameOver = true
      }
    }
  }
  if (!gameOver) {
    toggleTurn()
    $('h5').text(turn + " 's turn")
  }
}
const handleFailureResponse8 = function (response) {
  console.log(response)
}
module.exports = {
  handleSuccessResponse0,
  handleFailureResponse0,
  handleSuccessResponse1,
  handleFailureResponse1,
  handleSuccessResponse2,
  handleFailureResponse2,
  handleSuccessResponse3,
  handleFailureResponse3,
  handleSuccessResponse4,
  handleFailureResponse4,
  handleSuccessResponse5,
  handleFailureResponse5,
  handleSuccessResponse6,
  handleFailureResponse6,
  handleSuccessResponse7,
  handleFailureResponse7,
  handleSuccessResponse8,
  handleFailureResponse8
}
