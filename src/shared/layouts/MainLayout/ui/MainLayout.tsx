import { ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cln from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    sidebar: ReactElement;
    content: ReactElement;
    toolbar?: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
    const { className, header, sidebar, content, toolbar } = props;

    return (
        <div className={classNames(cln.MainLayout, {}, [className])}>
            <div className={cln.sidebar}>{sidebar}</div>
            <div className={cln.content}>{content}</div>
            <div className={cln.rightBar}>
                <div className={cln.header}>{header}</div>
                <div className={cln.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
};
