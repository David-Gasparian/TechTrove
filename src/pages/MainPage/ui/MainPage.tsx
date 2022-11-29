import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from 'entities/Counter';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('main')}
            <div>
                <Counter />
            </div>
        </div>
    );
};

export default MainPage;
