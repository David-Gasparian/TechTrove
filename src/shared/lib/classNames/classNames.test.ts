import { classNames } from '../classNames/classNames';

describe('classNames', () => {
    test('with main class', () => {
        expect(classNames('main')).toBe('main');
    });

    test('with additional class', () => {
        expect(classNames('main', {}, ['class_2'])).toBe('main class_2');
    });

    test('with mode', () => {
        const expected = 'main class_2';
        expect(classNames('main', { class_2: true })).toBe(expected);
    });

    test('with mode undefined', () => {
        const expected = 'main class_3';
        expect(classNames('main', { class2: false }, ['class_3'])).toBe(expected);
    });

    test('only additional', () => {
        expect(classNames('', {}, ['class'])).toBe('class');
    });
});
