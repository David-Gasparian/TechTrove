import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/deprecated/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cln from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockProps) => {
        const { className, block } = props;

        return (
            <div className={classNames(cln.articleCodeBlock, {}, [className])}>
                <Code text={block.code} />
            </div>
        );
    },
);
