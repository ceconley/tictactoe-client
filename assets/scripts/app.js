'use strict'

const authEvents = require('./auth/authevents')
const events = require('./events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('.close').on('click', authEvents.closeModal)
  $('.cells').on('click', events.onMove)
  $('#start-game').on('click', events.createGame)
  $('#get-games-button').on('click', events.getGames)
  $('#choose-token-close').on('click', events.tokenModalClose)
  $('#targaryen').on('click', events.selectTargaryen)
  $('#stark').on('click', events.selectStark)
  $('#baratheon').on('click', events.selectBaratheon)
  $('#lanister').on('click', events.selectLanister)
})
