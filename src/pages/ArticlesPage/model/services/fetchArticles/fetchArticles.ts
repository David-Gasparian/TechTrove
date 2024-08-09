import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApi } from '@/app/provider/storeProvider';
import { Article, ArticleTypes } from '@/entities/Article';
import {
    selectArticleOrderType,
    selectArticleSearch,
    selectArticleSortType,
    selectArticleType,
} from '@/features/FilterArticles';
import { addQueryParams } from '@/shared/lib/url/addQueryParams';
import { selectArticlesLimit } from '../../selectors/selectArticlesLimit/selectArticlesLimit';

interface fetchArticlesProps {
    page: number;
    replace?: boolean;
}

export const fetchArticles = createAsyncThunk<Article[], fetchArticlesProps, ThunkApi<string>>(
    'articlesPage/fetchArticles',
    async (data, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        try {
            const { page = 1 } = data;
            const limit = selectArticlesLimit(getState());
            const order = selectArticleOrderType(getState());
            const sort = selectArticleSortType(getState());
            const search = selectArticleSearch(getState());
            const type = selectArticleType(getState());

            addQueryParams({
                sort, order, search, type,
            });

            const result = await extra.api.get<Article[]>('articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleTypes.ALL ? undefined : type,
                },
            });

            if (!result.data) {
                throw new Error();
            }

            return result.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
