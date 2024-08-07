import { FC, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { SideBar } from '@/widgets/SideBar';
import { selectUserInited, userActions } from '@/entities/User';
import { AppRoute } from './provider/route';

export const App: FC = () => {
    const dispatch = useDispatch();
    const _inited = useSelector(selectUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthUser());
    }, [dispatch]);

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
