import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';
import { ArticleDetailsPageRecommendationSchema } from './ArticleDetailsPageRecommendationScema';

export interface ArticleDetailsPageSchema {
    articleDetailsComments: ArticleDetailsCommentSchema
    recommendationArticles: ArticleDetailsPageRecommendationSchema;
}
