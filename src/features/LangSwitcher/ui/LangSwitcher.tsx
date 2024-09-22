import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton, AppButtonTheme } from '@/shared/ui/AppButton';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className, short } = props;

    const { t, i18n } = useTranslation('translation');

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <AppButton
            data-testid="langSwitcher"
            theme={AppButtonTheme.CLEAR}
            onClick={toggleLanguage}
            className={classNames('', {}, [className])}
        >
            {short ? t('short_language') : t('language')}
        </AppButton>
    );
});
