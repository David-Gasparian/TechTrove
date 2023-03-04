import React, { FC } from 'react';

export const ArticleDetailsAsync = React.lazy<FC>(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
