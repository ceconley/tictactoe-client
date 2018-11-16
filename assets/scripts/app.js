'use strict'

const authEvents = require('./auth/authevents')
const events = require('./events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.close').on('click', authEvents.closeModal)
  $('.cells').on('click', events.onMove)
  $('#start-game').on('click', events.createGame)
  $('#get-games-button').on('click', events.getGames)
})
