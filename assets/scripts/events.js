// const api = require('./api')
const ui = require('./ui')

const on0Click = function (event) {
  event.preventDefault()
  // api.send0ClickToApi()
  // .then(ui.handleSuccessResponse)
  // .catch(ui.handleFailureResponse)
  ui.handleSuccessResponse0()
  $('#0').removeAttr('onClick')
}

const on1Click = function (event) {
  event.preventDefault()
  // api.send1ClickToApi()
  // .then(ui.handleSuccessResponse)
  // .catch(ui.handleFailureResponse)
  ui.handleSuccessResponse1()
  $('#1').removeAttr('onClick')
}

const on2Click = function (event) {
  event.preventDefault()
  // api.send2ClickToApi()
  // .then(ui.handleSuccessResponse)
  // .catch(ui.handleFailureResponse)
  ui.handleSuccessResponse2()
  $('#2').removeAttr('onClick')
}

const on3Click = function (event) {
  event.preventDefault()
  // api.send3ClickToApi()
  // .then(ui.handleSuccessResponse)
  // .catch(ui.handleFailureResponse)
  ui.handleSuccessResponse3()
  $('#3').removeAttr('onClick')
}

const on4Click = function (event) {
  event.preventDefault()
  //  api.send4ClickToApi()
  // .then(ui.handleSuccessResponse)
  // .catch(ui.handleFailureResponse)
  ui.handleSuccessResponse4()
  $('#4').removeAttr('onClick')
}

const on5Click = function (event) {
  event.preventDefault()
  //  api.send5ClickToApi()
  // .then(ui.handleSuccessResponse)
  // .catch(ui.handleFailureResponse)
  ui.handleSuccessResponse5()
  $('#5').removeAttr('onClick')
}

const on6Click = function (event) {
  event.preventDefault()
  //  api.send6ClickToApi()
  // .then(ui.handleSuccessResponse)
  // .catch(ui.handleFailureResponse)
  ui.handleSuccessResponse6()
  $('#6').removeAttr('onClick')
}

const on7Click = function (event) {
  event.preventDefault()
  //  api.send7ClickToApi()
  // .then(ui.handleSuccessResponse)
  // .catch(ui.handleFailureResponse)
  ui.handleSuccessResponse7()
  $('#7').removeAttr('onClick')
}

const on8Click = function (event) {
  event.preventDefault()
  //  api.send8ClickToApi()
  // .then(ui.handleSuccessResponse)
  // .catch(ui.handleFailureResponse)
  ui.handleSuccessResponse8()
  $('#8').removeAttr('onClick')
}

module.exports = {
  on0Click,
  on1Click,
  on2Click,
  on3Click,
  on4Click,
  on5Click,
  on6Click,
  on7Click,
  on8Click
}
