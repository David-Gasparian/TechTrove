import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Listbox } from 'shared/ui/Listbox/Listbox';
import { Currency } from '../../medel/consts/consts';

interface CurrencySelectProps {
    className?: string;
    readOnly?: boolean;
    onChange?: (value: Currency) => void;
    value?: Currency;
}

const options = [
    { value: Currency.DOL, content: Currency.DOL, disabled: false },
    { value: Currency.ER, content: Currency.ER, disabled: true },
    { value: Currency.RU, content: Currency.RU, disabled: false },
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
            <Listbox
                className={className}
                value={value}
                label={t('currency')}
                items={options}
                onChange={onHandleCurrencyChange}
                readonly={readOnly}
                direction="top right"
            />
        </div>
    );
});
