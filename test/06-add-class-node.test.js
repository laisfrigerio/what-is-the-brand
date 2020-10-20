import { createImageNode } from '../resources/scripts/helpers';

describe('test add class into HTML tag with javascript', () => {
    it('test add class into img tag', () => {
        const brand = {path: './android.svg', slug: 'android'};
        const node = createImageNode(brand, 0);
        expect(node.classList.contains('item')).toBe(true);
        expect(node.classList.contains('card-img')).toBe(true);
        expect(node.classList.contains('img-0')).toBe(true);
    });

    it('test add an invalid class into img tag', () => {
        const brand = {path: './android.svg', slug: 'android'};
        const node = createImageNode(brand, 0);
        expect(node.classList.contains('card-item')).toBe(false);
    });
});