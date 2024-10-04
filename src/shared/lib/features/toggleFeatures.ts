import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from './setGetFeatureFlags';

interface ToggleFeatures<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export const toggleFeatures = <T>({ on, off, name }: ToggleFeatures<T>) => {
    if (getFeatureFlag(name)) {
        return on();
    }

    return off();
};
