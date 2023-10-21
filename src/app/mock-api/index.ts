import { BusinessMockApi } from 'app/mock-api/apps/businness/api';
import { JobsMockApi } from './apps/jobs/api';
import { NavigationMockApi } from './common/navigation/api';
import { NewsMockApi } from './apps/news/api';
import { ServicesMockApi } from './apps/services/api';

export const mockApiServices = [

    BusinessMockApi,
    ServicesMockApi,
    JobsMockApi,
    NavigationMockApi,
    NewsMockApi
];
