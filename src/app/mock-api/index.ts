import { BusinessMockApi } from 'app/mock-api/apps/businness/api';
import { JobsMockApi } from './apps/jobs/api';
import { MessagesMockApi } from './common/messages/api';
import { NavigationMockApi } from './common/navigation/api';
import { NewsMockApi } from './apps/news/api';
import { NotificationsMockApi } from './common/notifications/api';
import { ServicesMockApi } from './apps/services/api';
import { ShortcutsMockApi } from './common/shortcuts/api';
import { UserMockApi } from './common/user/api';

export const mockApiServices = [

    BusinessMockApi,
    ServicesMockApi,
    JobsMockApi,
    NavigationMockApi,
    MessagesMockApi,
    NotificationsMockApi,
    ShortcutsMockApi,
    UserMockApi,
    NewsMockApi
];
