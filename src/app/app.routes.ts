import { Routes } from '@angular/router';
import { HashComponent } from './pages/hash/hash.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TutorialOpenvasComponent } from './pages/tutorial-openvas/tutorial-openvas.component';
import { TutorialPfsenseComponent } from './pages/tutorial-pfsense/tutorial-pfsense.component';

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
    {
        path: '',
        title: 'Inicio',
        component: HomeComponent
    },
    {
        path: 'Nosotros',
        title: 'Nosotros',
        component: AboutUsComponent
    },
    {
        path: 'tutorial-Pfesense',
        title: 'tutorial-Pfesense',
        component: TutorialPfsenseComponent
    },
    {
        path: 'tutorial-Openvas',
        title: 'tutorial-Openvas',
        component: TutorialOpenvasComponent
    },
];
