const baseUrl = 'http://tic-tac-toe.wdibos.com'

const send0ClickToApi = function () {
  $.ajax({
    url: baseUrl + '/games',
    method: 'PATCH'
  })
}

module.exports = {
  send0ClickToApi
}
