import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/storeProvider';

type ActionCreatorType<Returned, Arg> = (arg: Arg) =>
    AsyncThunkAction<Returned, Arg, { rejectValue: string }>;

export class TestAsyncThunk<Returned, Arg> {
    dispatch: Dispatch;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Returned, Arg>;

    constructor(actionCreator: ActionCreatorType<Returned, Arg>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
