import { FC, Suspense } from 'react';

import { useTheme } from 'app/provider/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { AppRoute } from './provider/route';

export const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('App', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="main-content">
                    <SideBar />
                    <AppRoute />
                </div>
            </Suspense>
        </div>
    );
};
