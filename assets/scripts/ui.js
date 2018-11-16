
const store = require('./store.js')

const onMoveSuccess = function () {
}

const onMoveFailure = function () {
  $('#message').html('Move Failed')
}

const onCreateSuccess = function (data) {
  store.gameId = data.game.id
}

const onCreateFail = function () {
  $('#message').html('Create Game Failed')
}

const onGetSuccess = function (response) {
  $('#get-games-success').html('')
  response.games.forEach(game => {
    const gameHTML = (`
      <h6>ID: ${game.id}</h6>
      <p>Board: ${game.cells}</p>
      `)
    $('#get-games-success').append(gameHTML)
  })
}

const onGetFailure = function () {
  $('#message').html('Game Request Failed')
}

module.exports = {
  onMoveSuccess,
  onMoveFailure,
  onCreateSuccess,
  onCreateFail,
  onGetSuccess,
  onGetFailure
}
