import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

interface UserProps {
    className?: string;
}

const User = memo((props: UserProps) => {
    const { t } = useTranslation('');
    const { className } = props;

    return (
        <div className={classNames('User', {}, [className])}>{t('User')}</div>
    );
});

export default User;
