export default class GameView {
  constructor() {}

  updateBoard(game) {
    this.updateTurn(game);
    const winningCombination = game.findWinningCombinations();
    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.game-cell[data-index='${i}']`);
      tile.textContent = game.board[i];
      let tileType = game.board[i] == "X" ? "tile-x" : "tile-o";

      tile.classList.remove("winning");

      tile.innerHTML = `<span class="${tileType}">${
        game.board[i] ? game.board[i] : ""
      }</span>`;

      if (winningCombination && winningCombination.includes(i)) {
        tile.classList.add("winning");
      }
    }
    if (
      !winningCombination &&
      game.board.every((element) => element !== null)
    ) {
      console.log("draw");
    }
  }

  updateTurn(game) {
    let playerX = document.querySelector(".player-X");
    let playerO = document.querySelector(".player-O");
    if (game.turn == "X") {
      playerX.classList.add("active");
      playerO.classList.remove("active");
    } else {
      playerX.classList.remove("active");
      playerO.classList.add("active");
    }
  }
}
