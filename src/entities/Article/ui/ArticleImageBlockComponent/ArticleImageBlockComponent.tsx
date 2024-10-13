import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/deprecated/AppImage';
import { ArticleImageBlock } from '../../model/types/article';
import cln from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockProps) => {
        const { className, block } = props;

        return (
            <div className={classNames(cln.articleImageBlock, {}, [className])}>
                {block.src && (
                    <div>
                        <AppImage src={block.src} alt="article-iamge" />
                        {block.title && (
                            <div className={cln.title}>{block.title}</div>
                        )}
                    </div>
                )}
            </div>
        );
    },
);
