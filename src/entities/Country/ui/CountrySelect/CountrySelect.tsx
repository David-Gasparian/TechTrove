import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/consts/consts';

interface CountrySelectProps {
    className?: string;
    readOnly?: boolean;
    onChange?: (value: Country) => void;
    value?: Country;
}

const options = [
    { value: Country.AMERICA, content: Country.AMERICA },
    { value: Country.ARMENIA, content: Country.ARMENIA },
    { value: Country.RUSSIA, content: Country.RUSSIA },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation('');

    const {
        className,
        readOnly,
        onChange,
        value,
    } = props;

    const onHandleCountryChange = (value: string) => {
        onChange?.(value as Country);
    };

    return (
        <div
            className={classNames('', {}, [className])}
        >
            <Select
                value={value}
                readOnly={readOnly}
                label={t('country')}
                options={options}
                onChange={onHandleCountryChange}
            />
        </div>
    );
});
