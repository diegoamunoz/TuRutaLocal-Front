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
import { UserEditComponent } from './pages/private/users/user-edit/user-edit.component';
import { UserNewComponent } from './pages/private/users/new-form/users-new-component';

import { authGuard } from './guards/auth.guard';

import { DashboardComponent } from './pages/private/dashboard/dashboard.component';

import { DestinosComponent } from './pages/private/destinos/destinos.component';
import { DestinosEditComponent } from './pages/private/destinos/destinos-edit/destinos-edit.component';
import { destinosNewForm } from './pages/private/destinos/new-form/new-form.component';

import { resenasNewForm } from './pages/private/resenas/new-form/new-form.component';
import { ResenasComponent } from './pages/private/resenas/resenas.component';
import { ResenasPublic } from './pages/public/resenas/resenas.component';
import { resenasFormPublic } from './pages/public/resenas/new-form-public/new-form.component';



export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent  },
    { path: 'register', component: RegisterComponent  },
    { path: 'destinos', component: DestinosPublicComponent },
    { path: 'resenas', component: ResenasPublic},
    { path: 'dashboard', component:DashboardComponent },
    { path: 'reserva/:id', component: ReservaPublicaComponent },
    { path: 'servicios/:id', component:serviciosPublicComponent },

    { path: 'dashboard/servicios',component:ServiciosComponent  },
    { path: 'dashboard/servicios/new', component:servicioNewFormcomponent },
    { path: 'dashboard/servicios/edit/:id',component:ServicioEditComponent  },
    
    { path: 'dashboard/reservas',component: ReservasComponent, canActivate:[ authGuard ]  },
    { path: 'dashboard/reservas/new', component: ReservaNewComponent, canActivate:[ authGuard ] },
    { path: 'dashboard/reservas/edit/:id', component: ReservaEditComponent, canActivate:[ authGuard ] },
    
    { path: 'dashboard/users',component:UsersComponent, canActivate:[ authGuard ]  },
    { path: 'dashboard/user/new',component:UserNewComponent, canActivate:[ authGuard ]  },
    { path: 'dashboard/users/edit/:id', component: UserEditComponent, canActivate:[ authGuard ] },

    { path: 'dashboard/destinos', component: DestinosComponent, canActivate:[ authGuard ]},
    { path: 'dashboard/destinos/new-form', component:destinosNewForm, canActivate:[ authGuard ]},
    { path: 'dashboard/destinos/edit/:id', component: DestinosEditComponent, canActivate:[ authGuard ]},

    { path: 'dashboard/resenas', component: ResenasComponent, canActivate:[ authGuard ]},
    { path: 'dashboard/resenas/new-form', component: resenasNewForm, canActivate:[ authGuard] },
    { path: 'resenas/new-form', component: resenasFormPublic},


    { path: '**', redirectTo: 'home' , pathMatch: 'full' },
    { path: '', redirectTo: 'home' , pathMatch: 'full' },
];



    
    

