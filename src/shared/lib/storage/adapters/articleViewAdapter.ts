import storage from '../storage';

export interface ArticleViewStorage {
    setView: (key: string, value: string) => void;
    getView: (key: string) => string | null;
    removeView: (key: string) => void;
}

const setView = (key: string, value: string): void => {
    storage.setItem(key, value);
};

const getView = (key: string): string | null => storage.getItem(key);

const removeView = (key: string): void => {
    storage.removeItem(key);
};

export const articleViewStorage: ArticleViewStorage = {
    setView,
    getView,
    removeView,
};
