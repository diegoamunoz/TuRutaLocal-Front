import { RouterStateSnapshot, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { ReservasComponent } from './pages/private/reservas/reservas.component';
import { DestinosComponent } from './pages/private/destinos/destinos.component';
import { destinosNewForm } from './pages/private/destinos/new-form/new-form.component';


export const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'login', component: LoginComponent  },
    { path:'register', component: RegisterComponent  },
    { path:'reservas', component: ReservasComponent  },
    { path:'dashboard/destinos/new-form', component: destinosNewForm},
    { path: '**', redirectTo: 'home' , pathMatch: 'full' },
    { path: '', redirectTo: 'home' , pathMatch: 'full' },
];
