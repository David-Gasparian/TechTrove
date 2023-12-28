import { FC, memo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { AsyncReducersList, useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';
import Articlesinfinitylist from '../ArticlesInfinityList/ArticlesInfinityList';

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
        <Page isScrollSave onScrollToEnd={onScrollToEnd}>
            <VStack gap={32} max>
                <ArticlesPageFilters />
                <Articlesinfinitylist />
            </VStack>
        </Page>
    );
});

export default ArticlesPage;
