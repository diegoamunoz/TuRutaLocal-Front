import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';

export const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'/login', component: LoginComponent  },
    { path:'/register', component: RegisterComponent  },
    { path: '**', redirectTo: 'home' , pathMatch: 'full' },
    { path: '', redirectTo: 'home' , pathMatch: 'full' },
];
