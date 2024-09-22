import { useEffect } from 'react';

export const useInitEffect = (clb: () => void) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            clb();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
