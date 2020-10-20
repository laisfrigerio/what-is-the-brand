import { inArray, sortArr } from '../resources/scripts/helpers';

describe('test uniques values into array', () => {
    it('check elements into array of length 1', () => {
        const level = 1;
        const arr = sortArr(level);
        for (let i = 0; i < level; i++) {
            const check = inArray(arr, i);
            expect(check).toBe(true);
        }
    });

    it('check elements into array of length 5', () => {
        const level = 5;
        const arr = sortArr(level);
        for (let i = 0; i < level; i++) {
            const check = inArray(arr, i);
            expect(check).toBe(true);
        }
    });

    it('check elements into array of length 16', () => {
        const level = 16;
        const arr = sortArr(level);
        for (let i = 0; i < level; i++) {
            const check = inArray(arr, i);
            expect(check).toBe(true);
        }
    });
});