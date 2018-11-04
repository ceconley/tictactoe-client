const baseUrl = 'http://tic-tac-toe.wdibos.com'

const newGametoApi = function () {
  return $.ajax({
    url: baseUrl + '/games'
    method: 'POST'
    data:
  })
}

const send0ClickToApi = function () {
  return $.ajax({
    url: baseUrl + '/games:id',
    method: 'PATCH'
    data: object
  })
}

module.exports = {
  signUptoApi
  signIntoApi
  signOuttoApi
  changePasswordtoApi
  newGametoApi
  send0ClickToApi
}
