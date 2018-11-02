const baseUrl = 'http://tic-tac-toe.wdibos.com'

const send0ClickToApi = function () {
  return $.ajax({
    url: baseUrl + '/games',
    method: 'PATCH'
  })
}

module.exports = {
  send0ClickToApi
}
