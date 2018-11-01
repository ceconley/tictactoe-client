const handleSuccessResponse = function (response) {
  $('#0').html('X')
  console.log(response)
  response.games.forEach(function (game) {
    const gameHTML = (`
        <p> 'X' </p>
        `)
    $('#0').append(gameHTML)
  })
}
const handleFailureResponse = function (response) {
  console.log(response)
}
module.exports = {
  handleSuccessResponse,
  handleFailureResponse
}
