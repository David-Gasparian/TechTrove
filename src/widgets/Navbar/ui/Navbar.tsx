import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { BugButton } from 'app/provider/ErrorBoundaries';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cln from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation('');

    return (
        <div className={classNames(cln.Navbar, {}, [className])}>
            <BugButton />
            <div className={cln.links}>
                <AppLink to="/">{t('Main')}</AppLink>
                <AppLink className={cln.aboutLink} to="/about">{t('About')}</AppLink>
                <AppLink to="/news">{t('News')}</AppLink>
            </div>
        </div>
    );
};
