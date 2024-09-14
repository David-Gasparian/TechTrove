import { FC, memo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { AsyncReducersList, useAsyncReducer } from '@/shared/lib/hooks/useAsyncReducer';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitEffect } from '@/shared/lib/hooks/useInitEffect';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList';

const asyncReducersList: AsyncReducersList = {
    articles: articlesPageReducer,
};

const ArticlesPage: FC = memo(() => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useAsyncReducer(asyncReducersList, { removeAfterUnmount: false });

    useInitEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onScrollToEnd = () => {
        dispatch(fetchNextArticles());
    };

    return (
        <Page data-testid='ArticlesPage' isScrollSave onScrollToEnd={onScrollToEnd}>
            <VStack gap={32} max>
                <ArticlesPageFilters />
                <ArticleInfiniteList />
            </VStack>
        </Page>
    );
});

export default ArticlesPage;
