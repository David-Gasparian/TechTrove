import { ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cln from './Flex.module.scss';

type Justify = 'start' | 'end' | 'center' | 'spaceBetween';
type Align = 'start' | 'end' | 'center';
type Direction = 'row' | 'column';
type Gap = 4 | 8 | 16 | 32;

export interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: Justify;
    align?: Align;
    direction?: Direction;
    gap?: Gap;
    max?: boolean;
    testId?: string;
}

const justifyClasses: Record<Justify, string> = {
    start: cln.justifyStart,
    end: cln.justifyEnd,
    spaceBetween: cln.justifySpaceBetween,
    center: cln.justifyCenter,
};

const alignClasses: Record<Align, string> = {
    start: cln.alignItemsStart,
    end: cln.alignItemsEnd,
    center: cln.alignItemsCenter,
};

const directionClasses: Record<Direction, string> = {
    column: cln.directionColumn,
    row: cln.directionRow,
};

const flexGap: Record<Gap, string> = {
    4: cln.gap4,
    8: cln.gap8,
    16: cln.gap16,
    32: cln.gap32,

};

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'start',
        direction = 'row',
        gap,
        max,
        testId,
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && flexGap[gap],
    ];

    const mode = {
        [cln.max]: !!max,
    };

    return (
        <div
            data-testid={testId}
            className={classNames(cln.Flex, mode, classes)}
        >
            {children}
        </div>
    );
};
