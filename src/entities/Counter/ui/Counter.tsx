import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { AppButton } from 'shared/ui/AppButton/AppButton';
import { selectCounterValue } from '../model/selectors/selectCounterValue/selectCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
    const { t } = useTranslation('');
    const dispatch = useDispatch();
    const counterValue = useSelector(selectCounterValue);

    const onIncrement = () => {
        dispatch(counterActions.increment());
    };

    const onDecrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid='counter'>
            <h1 data-testid='counter-title'>{counterValue}</h1>
            <div>
                <AppButton
                    data-testid='increment-button'
                    onClick={onIncrement}
                >
                    {t('increment')}
                </AppButton>

                <AppButton
                    data-testid='decrement-button'
                    onClick={onDecrement}
                >
                    {t('decrement')}
                </AppButton>
            </div>

        </div>
    );
};
