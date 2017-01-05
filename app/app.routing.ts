/**
 * Created by Huulc.
 */
import {Routes, RouterModule}   from '@angular/router';

import { HeroFormComponent } from './Controller/hero-form.compoment';
import { HeroFormAddComponent } from './Controller/addForm/hero-form-add.compoment';

const appRoutes: Routes = [
    {
        path: 'listuser',
        component: HeroFormComponent,
    },
    {
        path: 'newuser/:slug',
        component: HeroFormAddComponent,
    },
    {
        path: '',
        redirectTo: 'listuser',
        pathMatch: 'full'
    },
];

export const routing = RouterModule.forRoot(appRoutes);
