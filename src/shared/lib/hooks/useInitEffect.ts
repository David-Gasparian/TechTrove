import { useEffect } from 'react';

export const useInitEffect = (clb: () => void) => {
    useEffect(() => {
        if (__PROJECT__ === 'storybook') return;

        clb();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
