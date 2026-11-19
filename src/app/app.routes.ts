import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { Products } from './products/products';
import { Lifecycle } from './lifecycle/lifecycle';
import { Students } from './students/students';
import { StudentCreate } from './student-create/student-create';

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
    },
    {
        path: 'students',
        component: Students,
    },
    {
        path: 'student-create',
        component: StudentCreate,
    }
];