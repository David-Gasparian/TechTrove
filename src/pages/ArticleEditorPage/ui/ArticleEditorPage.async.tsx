import React, { FC } from 'react';

export const ArticleDetailsAsync = React.lazy<FC>(
    () => import('./ArticleEditorPage'),
);
