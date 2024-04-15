import { Routes } from '@angular/router';
import { Thing1Component } from './thing1/thing1.component';
import { Thing2Component } from './thing2/thing2.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'thing1',
        pathMatch: 'full'
    },
    {
        path: 'thing1',
        component: Thing1Component
    },
    {
        path: 'thing2',
        component: Thing2Component,
        loadChildren: () => import('./thing2/thing2.module').then(m => m.Thing2Module)
    }
];
