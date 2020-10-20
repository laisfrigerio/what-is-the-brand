import { sortArr } from '../resources/scripts/helpers';

describe('test sort array function', () => {
    it('empty array', () => {
        const level = 0;
        const arr = sortArr(level);
        expect(arr.length).toBe(0);
    });

    it('array with 1 element', () => {
        const level = 1;
        const arr = sortArr(level);
        expect(arr.length).toBe(1);
    });

    it('array with 5 element', () => {
        const level = 5;
        const arr = sortArr(level);
        expect(arr.length).toBe(5);
    });

    it('array with 16 element', () => {
        const level = 16;
        const arr = sortArr(level);
        expect(arr.length).toBe(16);
    });
});