import React, { FC } from 'react';

export const AboutPageAsync = React.lazy<FC>(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
