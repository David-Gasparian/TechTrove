import { FC, Suspense } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { AppRoute } from './provider/route';

export const App: FC = () => (
    <div className={classNames('App', {}, [])}>
        <Suspense fallback="">
            <Navbar />
            <div className="main-content">
                <SideBar />
                <AppRoute />
            </div>
        </Suspense>
    </div>
);
