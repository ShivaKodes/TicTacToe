import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameview = new GameView();

let tiles = document.querySelectorAll(".game-cell");

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    game.makeMove(tile.dataset.index);
    gameview.updateBoard(game);
  });
});

let restartButton = document.querySelector(".restart-button");
restartButton.addEventListener("click", () => {
  game = new Game();
  gameview.updateBoard(game);
});

gameview.updateBoard(game);
