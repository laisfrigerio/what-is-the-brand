import fs from 'fs';
import path from 'path';
import levelOne from '../resources/scripts/json/level-1.json';
import Game from '../resources/scripts/game';
import { containsClass } from '../resources/scripts/helpers';

const html = fs.readFileSync(path.resolve(__dirname, '../public', 'index.html'));
jest.dontMock('fs');

describe('test cards are equals', () => {

    beforeEach((done) => {
        document.documentElement.innerHTML = html.toString();
        done();
    }, 15000);

    afterEach(() => {
        jest.resetModules();
    });

    it('selecionou dois cards iguais', (done) => {
        const el = '.memory-game .card';
        const totalCards = document.getElementsByClassName('card').length;
        
        let game = new Game(el, totalCards, levelOne);
        game.init();
        
        const cardOne = game.cards[0];
        game.onCardPressed(cardOne);
        expect(game.selectedCards.length).toBe(1);

        const cardTwo = game.cards[1];
        game.onCardPressed(cardTwo);
        expect(game.selectedCards.length).toBe(0);

        if (game.finalResponse.length === 2) {
            expect(containsClass(cardOne, 'is-correct')).toBe(true);
            expect(containsClass(cardTwo, 'is-correct')).toBe(true);
        } else {
            setTimeout(() => {
                expect(containsClass(cardOne, 'show')).toBe(false);
                expect(containsClass(cardTwo, 'show')).toBe(false);
            }, 2000);
        }

        done();
    }, 15000);
});