import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollPositionSchema } from '../types/scrollPositionSchema';

const initialState: ScrollPositionSchema = {
    scroll: {},
};

const saveScrollPositionSlice = createSlice({
    name: 'saveScrollPosition',
    initialState,
    reducers: {
        setScroll: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});
export const { actions: saveScrollPositionActions } = saveScrollPositionSlice;
export const { reducer: saveScrollPositionReducer } = saveScrollPositionSlice;
