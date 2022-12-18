import React, { FC } from 'react';

export const ProfilePageAsync = React.lazy<FC>(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
