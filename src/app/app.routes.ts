import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { DestinosPublicComponent } from './pages/public/destinos-public/destinos-public.component';
import { ReservaPublicaComponent } from './pages/public/reserva-publica/reserva-publica.component';
import { serviciosPublicComponent } from './pages/public/servicios/servicios-public.component';

import { ServiciosComponent } from './pages/private/servicios/servicios.component';
import { servicioNewFormcomponent } from './pages/private/servicios/new-form/new-form.component';
import { ServicioEditComponent } from './pages/private/servicios/servicio-edit/servicio-edit.component';

import { ReservasComponent } from './pages/private/reservas/reservas.component';
import { ReservaEditComponent } from './pages/private/reservas/reserva-edit/reserva-edit.component';
import { ReservaNewComponent } from './pages/private/reservas/reserva-new/reserva-new.component';

import { UsersComponent } from './pages/private/users/users.component';
import { UserNewComponent } from './pages/private/users/new-form/users-new-component';
// import { Resena } from './pages/private/resenas/new-form/new-form.component';
import { authGuard } from './guards/auth.guard';
import { UserEditComponent } from './pages/private/users/user-edit/user-edit.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { DestinosComponent } from './pages/private/destinos/destinos.component';
import { DestinosEditComponent } from './pages/private/destinos/destinos-edit/destinos-edit.component';
import { destinosNewForm } from './pages/private/destinos/new-form/new-form.component';





// import { Resena } from './pages/private/resenas/new-form/new-form.component';
// import { resenas } from './pages/public/resenas/new-form/new-form.component';




export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent  },
    { path: 'register', component: RegisterComponent  },
    { path: 'dashboard', component:DashboardComponent, canActivate:[ authGuard ] },
    { path: 'reserva', component: ReservaPublicaComponent, canActivate:[ authGuard ] },
    { path: 'servicios/:id', component:serviciosPublicComponent },

    { path: 'dashboard/servicios',component:ServiciosComponent, canActivate:[ authGuard ]  },
    { path: 'dashboard/servicios/new', component:servicioNewFormcomponent, canActivate:[authGuard] },
    { path: 'dashboard/servicios/edit/:id',component:ServicioEditComponent, canActivate:[ authGuard ]  },
    
    { path: 'dashboard/reservas',component: ReservasComponent, canActivate:[ authGuard ]  },
    { path: 'dashboard/reservas/new', component: ReservaNewComponent, canActivate:[ authGuard ] },
    { path: 'dashboard/reservas/edit/:id', component: ReservaEditComponent, canActivate:[ authGuard ] },
    
    { path: 'dashboard/users',component:UsersComponent, canActivate:[ authGuard ]  },
    { path: 'dashboard/user/new',component:UserNewComponent, canActivate:[ authGuard ]  },
    { path: 'dashboard/users/edit/:id', component: UserEditComponent, canActivate:[ authGuard ] },
    { path: 'dashboard/destinos', component: DestinosComponent, canActivate:[ authGuard ]},
    { path: 'dashboard/destinos/new-form', component:destinosNewForm, canActivate:[ authGuard ]},
    { path: 'dashboard/destinos/edit/:id', component: DestinosEditComponent, canActivate:[ authGuard ]},

    // { path:'resenas/new-form', component: resenas, },
    // { path:'dashboard/resenas/new-form', component: Resena,  },  
    { path: '**', redirectTo: 'home' , pathMatch: 'full' },
    { path: '', redirectTo: 'home' , pathMatch: 'full' },
];



    
    

