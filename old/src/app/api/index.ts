import { JobsApi } from './apps/jobs/api';
import { NavigationApi } from './common/navigation/api';
import { NewsApi } from './apps/news/api';
import { ServicesApi } from './apps/services/api';
import { BusinessApi } from './apps/businness/api';

export const ApiServices = [

    BusinessApi,
    ServicesApi,
    JobsApi,
    NavigationApi,
    NewsApi
];
