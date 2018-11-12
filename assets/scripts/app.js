'use strict'

const authEvents = require('./auth/authevents')
const events = require('./events')

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
