import { getQueryParams } from './addQueryParams';

describe('getQueryParams', () => {
    test('with correct value', async () => {
        const params = getQueryParams({
            test: 'test',
        });

        expect(params).toEqual('?test=test');
    });

    test('with undefined', async () => {
        const params = getQueryParams({
            test: undefined,
        });

        expect(params).toEqual('?');
    });
});
