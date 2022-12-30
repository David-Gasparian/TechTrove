import {
    ChangeEvent, memo, SelectHTMLAttributes, useMemo,
} from 'react';

import { classNames, Mode } from '../../lib/classNames/classNames';
import cln from './Select.module.scss';

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'label'>;

interface OptionItem {
    value: string;
    content: string;
}

interface SelectProps extends HTMLSelectProps {
    className?: string;
    value?: string;
    label?: string;
    options?: OptionItem[];
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Select = memo((props: SelectProps) => {
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
        onChange?.(e.target.value);
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
});
