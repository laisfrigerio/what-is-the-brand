import levelOneData from './json/level-1.json';
import levelTwoData from './json/level-2.json';
import Board from './board';
import Game from './game';

const levels = {
    easy: {
        jsonData: levelOneData,
        totalCards: 16
    },
    intermediary: {
        jsonData: levelTwoData,
        totalCards: 32
    }
};

let board = new Board('.memory-game .list-cards');
let game = new Game('.memory-game .card', 16, levelOneData);
game.init();

document.querySelectorAll(".start").forEach((button, index) => {
    button.addEventListener("click", () => {
        const dataLevel = button.getAttribute("data-level");
        const level = levels[dataLevel];
        board.init();
        game = new Game('.memory-game .card', level.totalCards, level.jsonData);
        game.init();
    });
});