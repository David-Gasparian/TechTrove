import axios from 'axios';

import { userStorage } from '../lib/storage/adapters/userAdapter';
import { USER_LOCAL_STORAGE_KEY } from '../consts/localStorage';

export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization =
            userStorage.getUser(USER_LOCAL_STORAGE_KEY) || '';
    }

    return config;
});
