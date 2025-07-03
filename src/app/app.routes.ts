import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { ReservasComponent } from './pages/private/reservas/reservas.component';
import { ReservasNewForm } from './pages/private/reservas/new-form/new-form.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
// import { UsersComponent } from './pages/private/users/users.component';
// import { UserNewForm } from './pages/private/users/new-form/new-form.component';


export const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'login', component: LoginComponent  },
    { path:'register', component: RegisterComponent  },

    // { path:'dashboard/usuarios', component: UsersComponent  },
    // { path:'dashboard/usuarios/new', component: UserNewForm  },
    { path:'dashboard/reservas', component: ReservasComponent  },
    { path:'dashboard/reservas/new', component: ReservasNewForm  },
    { path: 'dashboard',component:DashboardComponent, canActivate: [ authGuard]},
    { path: '**', redirectTo: 'home' , pathMatch: 'full' },
    { path: '', redirectTo: 'home' , pathMatch: 'full' },
];
 