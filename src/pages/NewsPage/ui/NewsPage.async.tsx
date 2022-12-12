import React, { FC } from 'react';

export const NewsPageAsync = React.lazy<FC>(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./NewsPage')), 1500);
}));
