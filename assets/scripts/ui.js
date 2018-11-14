
const store = require('./store.js')

const onMoveSuccess = function () {
  console.log('click successful')
}

const onMoveFailure = function () {
  console.log('click failed')
}

const onCreateSuccess = function (data) {
  console.log('create game successful')
  store.gameId = data.game.id
  console.log(store.game)
}

const onCreateFail = function (error) {
  console.log('create game failed')
  console.log(error)
}

module.exports = {
  onMoveSuccess,
  onMoveFailure,
  onCreateSuccess,
  onCreateFail
}
