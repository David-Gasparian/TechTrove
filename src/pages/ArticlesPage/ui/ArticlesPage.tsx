import { FC, memo } from 'react';

import { ArticlesList, ArticleView } from 'entities/Article';

const ArticlesPage: FC = memo(() => (
    <div>
        <ArticlesList articles={[]} view={ArticleView.SMALL} isLoading={false} />
    </div>
));

export default ArticlesPage;
