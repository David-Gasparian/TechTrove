import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    SyntheticEvent,
    useEffect,
    useRef,
    useState,
} from 'react';

import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import cln from './AppInput.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface AppInputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    autoFocus?: boolean;
    readOnly?: boolean;
}

/**
 * @deprecated *Deprecated, use new components from the redesigned folder*
 */
export const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        type = 'text',
        onChange,
        value,
        placeholder,
        autoFocus,
        readOnly,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [curetPosition, setCuretPosition] = useState(0);
    const [focus, setFocus] = useState(false);

    const mode: Mode = {
        [cln.readOnly]: readOnly,
    };

    const showCuret = focus && !readOnly;

    useEffect(() => {
        if (autoFocus) {
            setFocus(true);
            inputRef?.current?.focus();
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
            data-testid="inputWrapper"
            className={classNames(cln.inputWrapper, mode, [className])}
        >
            {placeholder && (
                <div className={cln.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cln.curetWrapper}>
                <input
                    readOnly={readOnly}
                    data-testid="input"
                    ref={inputRef}
                    type={type}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    value={value}
                    onChange={onHandeChange}
                    {...otherProps}
                />
                {showCuret && (
                    <span
                        data-testid="curet"
                        style={{ left: `${curetPosition * 10}px` }}
                        className={cln.curet}
                    />
                )}
            </div>
        </div>
    );
});
