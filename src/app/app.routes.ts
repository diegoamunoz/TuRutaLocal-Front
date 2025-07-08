import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';

import { ServiciosComponent } from './pages/private/servicios/servicios.component';

import { servicioNewFormcomponent } from './pages/private/servicios/new-form/new-form.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { UsersComponent } from './pages/private/users/users.component';
import { UserNewForm } from './pages/private/users/new-form/new-form.component';
import { ReservasComponent } from './pages/private/reservas/reservas.component';
import { ReservaNewComponent } from './pages/private/reservas/reserva-new/reserva-new.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent  },
    { path: 'register', component: RegisterComponent  },
    { path: 'dashboard', component:DashboardComponent, canActivate:[ authGuard ] },
    { path: 'dashboard/servicios',component:ServiciosComponent, canActivate:[ authGuard ]  },
    { path:'dashboard/reservas', component: ReservasComponent, canActivate:[ authGuard ]  },
    { path: 'dashboard/servicios/new', component:servicioNewFormcomponent, canActivate:[authGuard] },
    { path:'dashboard/reservas/new', component: ReservaNewComponent, canActivate:[ authGuard ]  },

// import { ReservasComponent } from './pages/private/reservas/reservas.component';

]


