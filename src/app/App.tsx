import { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { SideBar } from '@/widgets/SideBar';
import { initAuthData, useUserInited } from '@/entities/User';
import { PageLoader } from '@/widgets/PageLoader';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { AppRoute } from './provider/route';

export const App: FC = () => {
    const dispatch = useDispatch();
    const _inited = useUserInited();
    const { theme } = useTheme();

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
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div className={classNames('App', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="main-content">
                            <SideBar />
                            <AppRoute />
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div className={classNames('App_redesigned', {}, [theme])}>
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRoute />}
                            sidebar={<SideBar />}
                        />
                    </Suspense>
                </div>
            }
        />
    );
};
