import { User } from 'entities/User';

export enum ArticleTypes {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export enum ArticleBlockTypes {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL'
}

interface ArticleBlockBasic {
    id: string;
    type: ArticleBlockTypes;
}

export interface ArticleImageBlock extends ArticleBlockBasic {
    type: ArticleBlockTypes.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBasic {
    type: ArticleBlockTypes.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleBlockBasic {
    type: ArticleBlockTypes.CODE;
    code: string;
}

export type ArticleBlock = ArticleImageBlock | ArticleTextBlock | ArticleCodeBlock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleTypes[],
    blocks: ArticleBlock[];
    user: User;
}
