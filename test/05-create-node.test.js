import fs from 'fs';
import path from 'path';
import levelOne from '../resources/scripts/json/level-1.json';
import { createHTMLTag, setAttribute, getAttribute } from '../resources/scripts/helpers';
import Game from '../resources/scripts/game';

const html = fs.readFileSync(path.resolve(__dirname, '../public', 'index.html'));
jest.dontMock('fs');

describe('create a generic HTML tag', () => {

    beforeEach((done) => {
        document.documentElement.innerHTML = html.toString();
        done();
    }, 15000);

    afterEach(() => {
        jest.resetModules();
    });

    it('check index HTML', (done) => {
        expect(document.getElementsByClassName('card').length).toBeGreaterThan(0);
        expect(document.getElementsByClassName('list-cards').length).toBe(1);
        expect(document.getElementsByClassName('memory-game').length).toBe(1);
        done();
    }, 15000);

    it('add elements into HTML', (done) => {
        const el = '.memory-game .card';
        const totalCards = document.getElementsByClassName('card').length;
        
        let game = new Game(el, totalCards, levelOne);
        game.init();

        const totalImages = document.getElementsByClassName('card-img').length;
        const totalParagraphs = document.getElementsByClassName('card-p').length;
        const average = totalCards/2;

        expect(game.cards.length).toBe(totalCards);
        expect(game.el).toBe(el);
        expect(totalImages).toBe(average);
        expect(totalParagraphs).toBe(average);
        done();
    }, 15000);

    it('create div tag', () => {
        const node = createHTMLTag('div');
        expect(node.tagName.toLowerCase()).toBe('div');
    });

    it('create div tag with class', () => {
        const node = createHTMLTag('div', ['item', 'card', 'tag']);
        expect(node.classList.contains('item')).toBe(true);
        expect(node.classList.contains('card')).toBe(true);
        expect(node.classList.contains('tag')).toBe(true);
    });

    it('create div tag and set attribute data', () => {
        const node = createHTMLTag('div', ['item', 'card', 'tag']);
        setAttribute(node, 'data-slug', 'bla-bla-bla');
        expect(node.getAttribute('data-slug')).toBe('bla-bla-bla');
    });

    it('create div tag and set attribute data and get it', () => {
        const node = createHTMLTag('div', ['item', 'card', 'tag']);
        setAttribute(node, 'data-slug', 'bla-bla-bla');
        expect(getAttribute(node, 'data-slug')).toBe('bla-bla-bla');
    });
});