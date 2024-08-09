import { createSelector } from '@reduxjs/toolkit';

import { selectArticleData } from '@/entities/Article';
import { selectAuthData } from '@/entities/User';

export const selectCanEdit = createSelector(
    [selectArticleData, selectAuthData],
    (article, user) => {
        if (!(article && user)) {
            return false;
        }

        return article.userId === user.id;
    },
);
