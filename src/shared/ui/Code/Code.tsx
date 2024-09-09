import { memo, useEffect, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import SuccessIcon from '@/shared/assets/icons/success.svg';
import { AppButton, AppButtonTheme } from '../AppButton';
import { Icon } from '../Icon';
import cln from './Code.module.scss';

interface IconProps {
    className?: string;
    text: string;
}

export const Code = memo((props: IconProps) => {
    const {
        className,
        text,
    } = props;

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;

        const timerId = setTimeout(() => setCopied(false), 1000);

        return () => clearTimeout(timerId);
    }, [copied]);

    const onHandleCopy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
    };

    return (
        <pre
            className={classNames(cln.Code, {}, [className])}
        >
            {
                copied ? (
                    <AppButton theme={AppButtonTheme.CLEAR} className={cln.copyIcon}>
                        <Icon SVG={SuccessIcon} />
                    </AppButton>
                )
                    : (
                        <AppButton onClick={onHandleCopy} theme={AppButtonTheme.CLEAR} className={cln.copyIcon}>
                            <Icon SVG={CopyIcon} />
                        </AppButton>
                    )
            }
            <code>
                {text}
            </code>
        </pre>
    );
});
