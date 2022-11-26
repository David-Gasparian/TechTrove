import { FC } from 'react';

import { BugButton } from 'app/provider/ErrorBoundaries';
import { classNames } from 'shared/lib/classNames/classNames';
import cln from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cln.Navbar, {}, [className])}>
            <BugButton />
        </div>
    );
};
