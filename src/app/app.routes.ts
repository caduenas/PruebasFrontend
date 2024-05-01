import { Routes } from '@angular/router';
import { HashComponent } from './pages/hash/hash.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: 'Hashing',
        title: 'Hash',
        component: HashComponent,
    },
    {
        path: 'Login',
        title: 'Login',
        component: LoginComponent
    },
    {
        path: 'Sign-up',
        title: 'Sign-up',
        component: SignUpComponent
    },
];
