import { createParagraphNode } from '../resources/scripts/helpers';

describe('test create a paragraph HTML tag with javascript', () => {
    it('test data attribute from a p tag', () => {
        const brand = { name: 'Android', path: './android.svg', slug: 'android' };
        const node = createParagraphNode(brand, 0);
        expect(node.getAttribute('data')).toBe(brand.slug);
    });

    it('test innerText from a p tag', () => {
        const brand = { name: 'Android', path: './android.svg', slug: 'android' };
        const node = createParagraphNode(brand, 0);
        expect(node.innerText).toBe(brand.name);
    });
});