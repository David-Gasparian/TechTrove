import { Listbox as HListbox } from '@headlessui/react';
import { Fragment } from 'react';

import { OptionItem } from 'shared/types/types';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import { AppButton, AppButtonTheme } from '../AppButton/AppButton';
import cln from './Listbox.module.scss';

type OptionsDirection = 'bottom' | 'top';

interface ListboxProps<T extends string> {
    className?: string;
    value?: T;
    defaultValue?: T,
    label?: string;
    options: OptionItem<T>[];
    onChange: (value: T) => void;
    readOnly?: boolean;
    optionsDirection?: OptionsDirection;
}

const optionsDirectionMap: Record<OptionsDirection, string> = {
    top: cln.optionTop,
    bottom: cln.optionBottom,
};

export const Listbox = <T extends string>(props: ListboxProps<T>) => {
    const {
        className, value, label, options, onChange,
        readOnly, defaultValue, optionsDirection = 'bottom',
    } = props;

    const optionsClasses = [
        optionsDirectionMap[optionsDirection],
    ];

    return (
        <HStack align='center' gap={8}>
            {label
                && (
                    <span
                        className={cln.label}
                    >
                        {`${label}>`}
                    </span>
                )}
            <HListbox
                as="div"
                className={classNames(cln.Listbox, { [cln.disabled]: readOnly }, [className])}
                value={value}
                onChange={onChange}
                disabled={readOnly}
            >
                <HListbox.Button as={Fragment}>
                    <AppButton
                        disabled={readOnly}
                        className={cln.trigger}
                        theme={AppButtonTheme.OUTLINED}
                    >
                        { value ?? defaultValue}
                    </AppButton>
                </HListbox.Button>
                <HListbox.Options className={classNames(cln.options, {}, optionsClasses)}>
                    {options.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cln.item,
                                        { [cln.active]: active, [cln.disabled]: item.disabled },
                                    )}
                                >
                                    {selected && '!! '}
                                    {item.content}
                                </li>
                            )}

                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>

    );
};
