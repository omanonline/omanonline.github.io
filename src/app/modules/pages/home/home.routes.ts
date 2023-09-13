import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { HelpCenterFaqsComponent } from 'app/modules/pages/home/faqs/faqs.component';
import { HelpCenterGuidesCategoryComponent } from 'app/modules/pages/home/guides/category/category.component';
import { HelpCenterGuidesComponent } from 'app/modules/pages/home/guides/guides.component';
import { HelpCenterGuidesGuideComponent } from 'app/modules/pages/home/guides/guide/guide.component';
import { HelpCenterService } from 'app/modules/pages/home/home.service';
import { HelpCenterSupportComponent } from 'app/modules/pages/home/support/support.component';
import { HomeComponent } from 'app/modules/pages/home/home.component';
import { inject } from '@angular/core';

export default [
    {
        path     : '',
        component: HomeComponent,
        resolve  : {
            faqs: () => inject(HelpCenterService).getFaqsByCategory('most-asked'),
        },
    },
    {
        path     : 'faqs',
        component: HelpCenterFaqsComponent,
        resolve  : {
            faqs: () => inject(HelpCenterService).getAllFaqs(),
        },
    },
    {
        path    : 'guides',
        children: [
            {
                path     : '',
                component: HelpCenterGuidesComponent,
                resolve  : {
                    guides: () => inject(HelpCenterService).getAllGuides(),
                },
            },
            {
                path    : ':categorySlug',
                children: [
                    {
                        path     : '',
                        component: HelpCenterGuidesCategoryComponent,
                        resolve  : {
                            guides: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
                                inject(HelpCenterService).getGuidesByCategory(route.paramMap.get('categorySlug')),
                        },
                    },
                    {
                        path     : ':guideSlug',
                        component: HelpCenterGuidesGuideComponent,
                        resolve  : {
                            guides: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
                                inject(HelpCenterService).getGuide(route.parent.paramMap.get('categorySlug'), route.paramMap.get('guideSlug')),
                        },
                    },
                ],
            },
        ],
    },
    {
        path     : 'support',
        component: HelpCenterSupportComponent,
    },
] as Routes;
