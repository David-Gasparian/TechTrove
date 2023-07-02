import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cln from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockProps) => {
    const { className, block } = props;

    return (
        <div
            className={classNames(cln.ArticleTextBlock, {}, [className])}
        >
            {block.title && (
                <div className={cln.title}>
                    <Text size={TextSize.M} title={block.title} />
                </div>
            )}
            {
                block.paragraphs.map((paragraph) => (
                    <Text key={paragraph} size={TextSize.M} text={paragraph} />
                ))
            }
        </div>
    );
});
