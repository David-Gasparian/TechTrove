import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/provider/storeProvider';
import { selectProfileIsLoading } from './selectProfileIsLoading';

describe('selectProfileIsLoading', () => {
    test('should return false', () => {
        const profileData = {
            isLoading: false,
        };

        const state: DeepPartial<StateSchema> = {
            profile: profileData,
        };
        expect(selectProfileIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return true', () => {
        const profileData = {
            isLoading: true,
        };

        const state: DeepPartial<StateSchema> = {
            profile: profileData,
        };
        expect(selectProfileIsLoading(state as StateSchema)).toEqual(true);
    });

    test('if state is empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileIsLoading(state as StateSchema)).toBe(false);
    });
});
