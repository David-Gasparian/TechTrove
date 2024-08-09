import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage';
import { userStorage } from '@/shared/lib/storage/adapters/userAdapter';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = userStorage.getUser(USER_LOCAL_STORAGE_KEY) || '';

            if (token) {
                headers.set('Authorization', token);
            }

            return headers;
        },
    }),

    endpoints: (builder) => ({}),
});
