import { OptionItem } from '@/shared/types/types';
import { classNames } from '../../lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cln from './Tabs.module.scss';

interface TabsProps<T extends string> {
    className?: string;
    value?: T;
    tabs: OptionItem<T>[];
    onTabClick?: (value: T) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className,
        value,
        tabs,
        onTabClick,
    } = props;

    const onHandleTabClick = (tab: string) => () => {
        onTabClick?.(tab as T);
    };

    return (
        <div
            className={classNames(cln.Tabs, {}, [className])}
        >
            {tabs.map((tab) => (
                <Card
                    onClick={onHandleTabClick(tab.value)}
                    theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
