import { insert } from '../resources/scripts/helpers';

describe('test insert unique values into array', () => {
    it('empty array', () => {
        const arr = [];
        expect(arr.length).toBe(0);
    });

    it('array only 1 element', () => {
        let arr = [2];
        arr = insert(arr, 2);
        expect(arr.length).toBe(1);
    });

    it('array 4 element', () => {
        let arr = [2, 4, 5];
        arr = insert(arr, 8);
        expect(arr.length).toBe(4);
    });

    it('array 4 element (duplicate inserts)', () => {
        let arr = [2, 4, 5];
        arr = insert(arr, 8);
        arr = insert(arr, 8);
        expect(arr.length).toBe(4);
    });

    it('array 4 element (duplicate inserts)', () => {
        let arr = [2, 4, 5];
        arr = insert(arr, 8);
        arr = insert(arr, 2);
        arr = insert(arr, 8);
        expect(arr.length).toBe(4);
    });
});
