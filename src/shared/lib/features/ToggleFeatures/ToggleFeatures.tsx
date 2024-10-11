import { ReactElement } from 'react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from '../setGetFeatureFlags';

interface ToggleFeaturesProps<T> {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export function ToggleFeatures<T>(props: ToggleFeaturesProps<T>) {
    const { on, off, feature } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
}
