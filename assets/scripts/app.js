'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/authevents')
const events = require('./events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#0').on('click', events.onClick)
  $('#1').on('click', events.onClick)
  $('#2').on('click', events.onClick)
  $('#3').on('click', events.onClick)
  $('#4').on('click', events.onClick)
  $('#5').on('click', events.onClick)
  $('#6').on('click', events.onClick)
  $('#7').on('click', events.onClick)
  $('#8').on('click', events.onClick)
  $('#start-game').on('click', events.createGame)
})

// create game contructor consisting of id, cells(array), over(boolean), players
// const Game = function (id, cells, over, player_x, player_o) {
//   this.id = id
//   this.cells = cells
//   this.over = over
//   this.player_x = player_x
//   this.player_o = player_o
// }
// create players constructor consisting of id and email
// const Player = function (id, email) {
//   this.id = id
//   this.email = email
// }
