
const store = require('./store.js')

const onMoveSuccess = () => {
}

const onMoveFailure = () => {
  $('#message').html('Move Failed')
}

const onCreateSuccess = (data) => {
  store.gameId = data.game.id
}

const onCreateFail = () => {
  $('#message').html('Create Game Failed')
}

const onGetSuccess = (response) => {
  $('#get-games-success').html('')
  response.games.forEach(game => {
    const gameHTML = (`
      <h6>ID: ${game.id}</h6>
      <p>Board: ${game.cells}</p>
      `)
    $('#get-games-success').append(gameHTML)
  })
}

const onGetFailure = () => {
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
