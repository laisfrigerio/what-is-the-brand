import fs from 'fs';
import path from 'path';
import levelOne from '../resources/scripts/json/level-1.json';
import Game from '../resources/scripts/game';

const html = fs.readFileSync(path.resolve(__dirname, '../public', 'index.html'));
jest.dontMock('fs');

describe('click card element', () => {

    beforeEach((done) => {
        document.documentElement.innerHTML = html.toString();
        done();
    }, 15000);

    afterEach(() => {
        jest.resetModules();
    });

    it('click into card to check classList', (done) => {
        const el = '.memory-game .card';
        const totalCards = document.getElementsByClassName('card').length;
        
        let game = new Game(el, totalCards, levelOne);
        game.init();
        
        const card = game.cards[0];
        game.onCardPressed(card);
        expect(card.classList.contains('show')).toBe(true);

        game.onCardPressed(card);
        expect(card.classList.contains('show')).toBe(false);
        done();
    }, 15000);

    it('test insert and remove cards selected', (done) => {
        const el = '.memory-game .card';
        const totalCards = document.getElementsByClassName('card').length;
        
        let game = new Game(el, totalCards, levelOne);
        game.init();
        
        const card = game.cards[0];
        game.onCardPressed(card);
        expect(game.selectedCards.length).toBe(1);

        game.onCardPressed(card);
        expect(game.selectedCards.length).toBe(0);

        done();
    }, 15000);
});