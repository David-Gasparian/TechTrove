import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cln from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound: FC<NotFoundProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation('main');

    return (
        <div className={classNames(cln.notFound, {}, [className])}>
            {t('not_found')}
        </div>
    );
};
