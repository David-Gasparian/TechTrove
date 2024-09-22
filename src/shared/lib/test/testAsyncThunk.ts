import axios, { AxiosStatic } from 'axios';
import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/provider/storeProvider';

type ActionCreatorType<Returned, Arg, RejectValue> = (
    arg: Arg,
) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectValue }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

/**
 * A utility class for testing async thunks in Redux.
 *
 * @template Returned - The return type of the async thunk.
 * @template Arg - The argument type passed to the async thunk.
 * @template RejectValue - The rejection value type of the async thunk.
 */
export class TestAsyncThunk<Returned, Arg, RejectValue> {
    dispatch: Dispatch;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Returned, Arg, RejectValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.Mock;

    /**
     * @param {ActionCreatorType<Returned, Arg, RejectValue>} actionCreator - The async thunk action creator.
     * @param {DeepPartial<StateSchema>} [state] - Optional initial state for testing.
     */
    constructor(
        actionCreator: ActionCreatorType<Returned, Arg, RejectValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    /**
     * Calls the thunk with the provided argument.
     * @param {Arg} arg - The argument to pass to the async thunk.
     * @returns {Promise<Returned | RejectValue>} The result of the async thunk execution.
     */
    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        });

        return result;
    }
}
