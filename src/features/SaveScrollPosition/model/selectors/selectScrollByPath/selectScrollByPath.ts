import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/storeProvider';

const selectScroll = (state: StateSchema) => state?.scrollPosition?.scroll;

export const selectScrollByPath = createSelector(
    selectScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
