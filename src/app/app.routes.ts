import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { Products } from './products/products';
import { Lifecycle } from './lifecycle/lifecycle';

export const routes: Routes = [
    {
        path: 'data-binding',
        component: DataBinding,
    },
    {
        path: 'product',
        component: Products,
    },
    {
        path: 'lifecycle',
        component: Lifecycle,
    }
];