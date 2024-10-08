import { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { SideBar } from '@/widgets/SideBar';
import { initAuthData, useUserInited } from '@/entities/User';
import { PageLoader } from '@/widgets/PageLoader';
import { HStack } from '@/shared/ui/Stack';
import { AppRoute } from './provider/route';

export const App: FC = () => {
    const dispatch = useDispatch();
    const _inited = useUserInited();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!_inited) {
        return (
            <HStack
                max
                align="center"
                justify="center"
                className={classNames('App', {}, [])}
            >
                <PageLoader />
            </HStack>
        );
    }

    return (
        <div className={classNames('App', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="main-content">
                    <SideBar />
                    {_inited && <AppRoute />}
                </div>
            </Suspense>
        </div>
    );
};
