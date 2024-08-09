import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import cln from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = memo((props: PageLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cln.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
});
