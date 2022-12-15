import storage from '../storage';

export interface UserStorage {
    setUser: (key: string, value: string) => void;
    getUser: (key: string) => string | null;
    removeUser: (key: string) => void;
}

const setUser = (key: string, value: string): void => {
    storage.setItem(key, value);
};

const getUser = (key: string): string | null => storage.getItem(key);

const removeUser = (key: string): void => {
    storage.removeItem(key);
};

export const userStorage: UserStorage = {
    setUser,
    getUser,
    removeUser,
};
