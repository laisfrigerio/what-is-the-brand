import { createImageNode } from '../resources/scripts/helpers';

describe('test create a img HTML tag with javascript', () => {
    it('test src attribute from a img tag', () => {
        const brand = {path: './android.svg', slug: 'android'};
        const node = createImageNode(brand, 0);
        expect(node.getAttribute('src')).toBe(`./images/${brand.path}`);
    });

    it('test data attribute from a img tag', () => {
        const brand = {path: './android.svg', slug: 'android'};
        const node = createImageNode(brand, 0);
        expect(node.getAttribute('data')).toBe(brand.slug);
    });
});