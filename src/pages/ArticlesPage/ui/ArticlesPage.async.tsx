import React, { FC } from 'react';

export const ArticlesPageAsync = React.lazy<FC>(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
