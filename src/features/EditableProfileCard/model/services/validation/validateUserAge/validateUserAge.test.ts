import { validateUserAge } from './validateUserAge';

describe('validateUserAge', () => {
    test('with correct age', () => {
        const isError = false;
        expect(validateUserAge(10)).toBe(isError);
    });

    test('with incorrect less age', () => {
        const isError = true;
        expect(validateUserAge(-1)).toBe(isError);
    });

    test('with incorrect greater age', () => {
        const isError = true;
        expect(validateUserAge(150)).toBe(isError);
    });
});
