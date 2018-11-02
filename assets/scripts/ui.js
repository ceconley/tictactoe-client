const players = ['X', 'O']
let turn = players[0]

const toggleTurn = function () {
  if (turn === players[0]) {
    turn = players[1]
  } else {
    turn = players[0]
  }
}

const handleSuccessResponse = function () {
  $('#0').html(turn)
  toggleTurn()
}
const handleFailureResponse = function (response) {
  console.log(response)
}
module.exports = {
  handleSuccessResponse,
  handleFailureResponse
}
