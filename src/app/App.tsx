import { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { userActions } from 'entities/User';
import { AppRoute } from './provider/route';

export const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthUser());
    }, [dispatch]);

    return (
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
};
