import { rtkApi } from '@/shared/api/rtkApi';
import { NotificationType } from '../model/types/notificationType';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchNotifications: build.query<NotificationType[], void>({
            query: (limit) => ({
                url: 'notifications',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const { useFetchNotificationsQuery } = notificationApi;
