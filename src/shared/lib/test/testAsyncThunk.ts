import axios, { AxiosStatic } from 'axios';
import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/provider/storeProvider';

type ActionCreatorType<Returned, Arg, RejectValue> = (arg: Arg) =>
    AsyncThunkAction<Returned, Arg, { rejectValue: RejectValue }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Returned, Arg, RejectValue> {
    dispatch: Dispatch;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Returned, Arg, RejectValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.Mock;

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

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch,
            this.getState,
            { api: this.api, navigate: this.navigate },
        );

        return result;
    }
}
