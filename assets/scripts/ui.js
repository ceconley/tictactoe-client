
const store = require('./store.js')

const onMoveSuccess = function () {
  // console.log('click successful')
}

const onMoveFailure = function () {
  $('#message').html('Move Failed')
}

const onCreateSuccess = function (data) {
  // console.log('create game successful')
  store.gameId = data.game.id
}

const onCreateFail = function (error) {
  $('#message').html('Create Game Failed')
  console.log(error)
}

const onGetSuccess = function () {
  console.log('sucessful get')
}

const onGetFailure = function () {
  console.log('failed get')
}

module.exports = {
  onMoveSuccess,
  onMoveFailure,
  onCreateSuccess,
  onCreateFail,
  onGetSuccess,
  onGetFailure
}
