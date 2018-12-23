
const store = require('./store.js')

const onMoveSuccess = (event) => {

}

const onMoveFailure = () => {
  $('#message').text('Move Failed')
}

const onCreateSuccess = (data) => {
  store.gameId = data.game.id
}

const onCreateFail = () => {
  $('#message').text('Create Game Failed')
}

const onGetSuccess = (response) => {
  $('#get-games').text('')
  response.games.forEach(game => {
    const gameHTML = (`
      <table id="get-games-table">
        <th>ID: ${game.id}</th>
        <tr>
          <td id="get-games-td">${game.cells[0]}</td>
          <td id="get-games-td">${game.cells[1]}</td>
          <td id="get-games-td">${game.cells[2]}</td>
        </tr>
          <td id="get-games-td">${game.cells[3]}</td>
          <td id="get-games-td">${game.cells[4]}</td>
          <td id="get-games-td">${game.cells[5]}</td>
        <tr>
          <td id="get-games-td">${game.cells[6]}</td>
          <td id="get-games-td">${game.cells[7]}</td>
          <td id="get-games-td">${game.cells[8]}</td>
        </tr>
      </table>
      `)
    $('#get-games').append(gameHTML)
  })
}

const onGetFailure = () => {
  $('#message').html('Game Request Failed')
}

module.exports = {
  onMoveSuccess,
  onMoveFailure,
  onCreateSuccess,
  onCreateFail,
  onGetSuccess,
  onGetFailure
}
