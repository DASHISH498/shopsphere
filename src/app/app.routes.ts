import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Products } from './features/products/products';
import { Categories } from './features/categories/categories';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard,
    },
    {
        path: 'products',
        component: Products,
    },
    {
        path: 'categories',
        component: Categories,
    }
];
