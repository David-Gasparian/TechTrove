type LocalStorage = typeof localStorage;

export interface Storage {
    getItem: (key: string) => string | string;
    setItem: (key: string, value: string) => void;
    setStorage: (newStorage: LocalStorage) => void;
    removeItem: (key: string) => void;
}

let storage: LocalStorage = localStorage;

const setItem = (key: string, value: string): void => {
    storage?.setItem(key, value);
};

const getItem = (key: string): string | null => storage?.getItem(key);

const removeItem = (key: string): void => {
    storage?.removeItem(key);
};

const setStorage = (newStorage: LocalStorage): void => {
    storage = newStorage;
};

export default {
    getItem,
    setItem,
    setStorage,
    removeItem,
} as Storage;
