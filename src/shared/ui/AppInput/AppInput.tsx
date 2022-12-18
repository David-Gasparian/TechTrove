import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    SyntheticEvent,
    useEffect,
    useRef,
    useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cln from './AppInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface AppInputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    autoFocus?: boolean;
}

export const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        type = 'text',
        onChange,
        value,
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const [curetPosition, setCuretPosition] = useState(0);
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        if (autoFocus) {
            setFocus(true);
            inputRef.current.focus();
        }
    }, [autoFocus]);

    const onHandeChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
    };

    const onSelect = (e: SyntheticEvent<HTMLInputElement, Event>) => {
        setCuretPosition(e.currentTarget.selectionStart || 0);
    };

    return (
        <div
            data-testid='inputWrapper'
            className={classNames(cln.inputWrapper, {}, [className])}
        >
            { placeholder && (
                <div className={cln.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cln.curetWrapper}>
                <input
                    data-testid='input'
                    ref={inputRef}
                    type={type}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    value={value}
                    onChange={onHandeChange}
                    {...otherProps}
                />
                {focus && (
                    <span
                        data-testid='curet'
                        style={{ left: `${curetPosition * 10}px` }}
                        className={cln.curet}
                    />
                )}
            </div>
        </div>
    );
});
