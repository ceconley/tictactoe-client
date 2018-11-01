const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const on0Click = function (event) {
  event.preventDefault()
  const input = getFormFields(event.target)
  console.log('my move is', input.game.id)
  api.send0ClickToApi()
    .then(ui.handleSuccessResponse)
    .catch(ui.handleFailureResponse)
}
module.exports = {
  on0Click
}
