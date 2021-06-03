import levelOneData from './json/level-1.json'
import Game from './game'

const game = new Game('.memory-game .card', 16, levelOneData)
game.init()
