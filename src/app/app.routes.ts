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
    },
    {
        path: 'orders',
        loadComponent: () => import('./features/orders/orders').then(m => m.Orders),
    },
    {
        path: 'customers',
        loadComponent: () => import('./features/customers/customers').then(m => m.Customers),
    }
];
