import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { classNames } from 'shared/lib/classNames/classNames';
import cln from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;

    const { t, i18n } = useTranslation('translation');

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <AppButton
            theme={AppButtonTheme.CLEAR}
            onClick={toggleLanguage}
            className={classNames(cln.LangSwitcher, {}, [className])}
        >
            {t('language')}
        </AppButton>
    );
};
