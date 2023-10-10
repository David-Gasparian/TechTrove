import React, { FC } from 'react';

export const ArticlesPageAsync = React.lazy<FC>(() => import('./ArticlesPage'));
