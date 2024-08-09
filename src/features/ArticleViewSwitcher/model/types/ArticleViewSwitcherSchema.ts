import { ArticleView } from '@/entities/Article';

export interface ArticleViewSwitcherSchema {
    view: ArticleView;
}

export interface ArticleViews {
    icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    view: ArticleView;
}
