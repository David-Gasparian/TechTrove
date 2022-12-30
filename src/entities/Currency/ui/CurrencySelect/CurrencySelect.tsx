import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../medel/types/curencyTypes';

interface CurrencySelectProps {
    className?: string;
    readOnly?: boolean;
    onChange?: (value: Currency) => void;
    value?: Currency;
}

const options = [
    { value: Currency.DOL, content: Currency.DOL },
    { value: Currency.ER, content: Currency.ER },
    { value: Currency.RU, content: Currency.RU },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation('');

    const {
        className,
        readOnly,
        onChange,
        value,
    } = props;

    const onHandleCurrencyChange = (value: string) => {
        onChange?.(value as Currency);
    };

    return (
        <div
            className={classNames('', {}, [className])}
        >
            <Select
                value={value}
                readOnly={readOnly}
                label={t('currency')}
                options={options}
                onChange={onHandleCurrencyChange}
            />
        </div>
    );
});
