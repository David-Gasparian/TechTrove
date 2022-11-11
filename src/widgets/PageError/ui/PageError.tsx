import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import cln from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation('translation');

    const reload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cln.PageError, {}, [className])}>
            <h1>{t('something_went_wrong')}</h1>
            <AppButton theme={AppButtonTheme.CLEAR} onClick={reload}>
                {t('refresh_page')}
            </AppButton>
        </div>
    );
};
