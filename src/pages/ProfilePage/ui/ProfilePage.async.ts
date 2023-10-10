import React, { FC } from 'react';

export const ProfilePageAsync = React.lazy<FC>(() => import('./ProfilePage'));
