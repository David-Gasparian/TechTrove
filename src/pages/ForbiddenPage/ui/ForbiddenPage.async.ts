import React, { FC } from 'react';

export const ForbiddenPageAsync = React.lazy<FC>(
    () => import('./ForbiddenPage'),
);
