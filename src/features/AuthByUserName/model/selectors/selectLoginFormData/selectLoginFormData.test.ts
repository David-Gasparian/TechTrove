import { StateSchema } from '@/app/provider/storeProvider';
import { selectLoginFormData } from './selectLoginFormData';

describe('selectAuthData', () => {
    test('should return login form data', () => {
        const loginFormData = {
            isLoading: false,
            password: '',
            username: '',
            error: '',
        };

        const state: DeepPartial<StateSchema> = {
            loginForm: loginFormData,
        };
        expect(selectLoginFormData(state as StateSchema)).toEqual(
            loginFormData,
        );
    });
});
