import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../Stack';
import { AppButton, AppButtonTheme } from '../../../AppButton/AppButton';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Listbox.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export const Listbox = (props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack style={{ opacity: 0.3 }} gap={4} align="center">
            {label
                && (
                    <span
                        className={classNames(cls.span, { [cls.disabled]: readonly }, [className])}
                    >
                        {`${label}>`}
                    </span>
                )}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(popupCls.popup, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={popupCls.trigger}>
                    <AppButton disabled={readonly} theme={AppButtonTheme.OUTLINED}>
                        {value ?? defaultValue}
                    </AppButton>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <div
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                    )}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </div>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
