import storage from '../storage';

export interface ThemeStorage {
    setTheme: (key: string, value: string) => void;
    getTheme: (key: string) => string | null;
}

const setTheme = (key: string, value: string): void => {
    storage.setItem(key, value);
};

const getTheme = (key: string): string | null => storage.getItem(key);

export const themeStorage: ThemeStorage = {
    setTheme,
    getTheme,
};
