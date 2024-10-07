import { StateSchema } from '@/app/provider/storeProvider';
import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};

export const [useJsonSettings, selectJsonSettings] = buildSelector(
    (state: StateSchema) =>
        state.user?.authData?.jsonSettings ?? defaultJsonSettings,
);
