import {
    ChangeEvent, SelectHTMLAttributes, useMemo,
} from 'react';
import { OptionItem } from '@/shared/types/types';

import { classNames, Mode } from '../../lib/classNames/classNames';
import cln from './Select.module.scss';

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'label'>;

interface SelectProps<T extends string> extends HTMLSelectProps {
    className?: string;
    value?: T;
    label?: string;
    options?: OptionItem<T>[];
    onChange?: (value: T) => void;
    readOnly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        value,
        onChange,
        options,
        label,
        readOnly,
    } = props;

    const mode: Mode = {
        [cln.disabled]: readOnly,
    };

    const onHandleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            data-testid='option'
            key={opt.value}
            value={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div
            data-testid='wrapper'
            className={classNames(cln.wrapper, mode, [className])}
        >
            {label
                && (
                    <span
                        data-testid='label'
                        className={cln.label}
                    >
                        {`${label}>`}
                    </span>
                )}
            <select
                data-testid='select'
                disabled={readOnly}
                className={cln.select}
                onChange={onHandleSelect}
                value={value}
            >
                {optionsList}
            </select>
        </div>
    );
};
