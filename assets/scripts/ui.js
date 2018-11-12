
const store = require('./store.js')

const clickSuccessResp = function () {
  $('#' + event.target.id).html()
}

const clickFailResp = function () {
  console.log("Didn't work")
}

const createSuccessResp = function (data) {
  store.game.id = data.game
  $('#board').show()
}

const createFailResp = function () {
  console.log("Didn't work")
}

module.exports = {
  clickSuccessResp,
  clickFailResp,
  createSuccessResp,
  createFailResp
}
