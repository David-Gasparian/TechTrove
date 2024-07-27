import React, { FC } from 'react';

export const AdminPageAsync = React.lazy<FC>(() => import('./AdminPanelPage'));
