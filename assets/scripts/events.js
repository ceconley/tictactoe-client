// const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('../../lib/get-form-fields.js')

const onClick = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // const gamedata = {
  //   game: {
  //     cell: {
  //       index: celldata.cell.index,
  //       value: celldata.cell.value
  //     }
  //   }
  //   console.log(data)
  //   api.send0ClickToApi()
  //   .then(ui.handleSuccessResponse)
  //   .catch(ui.handleFailureResponse)
  // }
  ui.handleSuccessResponse(event)
  // $(event.target).removeAttr('onClick')
}

module.exports = {
  onClick
}
