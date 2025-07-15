import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { DestinosPublicComponent } from './pages/public/destinos-public/destinos-public.component';
import { ReservasComponent } from './pages/private/reservas/reservas.component';
import { ReservaPublicaComponent } from './pages/public/reserva-publica/reserva-publica.component';
import { ServiciosComponent } from './pages/private/servicios/servicios.component';
import { UsersComponent } from './pages/private/users/users.component';
import { UserNewComponent } from './pages/private/users/new-form/users-new-component';
import { destinosNewForm } from './pages/private/destinos/new-form/new-form.component';
import { servicioNewFormcomponent } from './pages/private/servicios/new-form/new-form.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { ReservaNewComponent } from './pages/private/reservas/reserva-new/reserva-new.component';
import { ServicioEditComponent } from './pages/private/servicios/servicio-edit/servicio-edit.component';
import { serviciosPublicComponent } from './pages/public/servicios/servicios-public.component';
import { DestinosComponent } from './pages/private/destinos/destinos.component';
import { DestinosEditComponent } from './pages/private/destinos/destinos-edit/destinos-edit.component';
import { ReservaEditComponent } from './pages/private/reservas/reserva-edit/reserva-edit.component';
import { UserEditComponent } from './pages/private/users/user-edit/user-edit.component';

// import { Resena } from './pages/private/resenas/new-form/new-form.component';
// import { resenas } from './pages/public/resenas/new-form/new-form.component';




export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent  },
    { path: 'register', component: RegisterComponent  },
    { path: 'reservas', component: ReservasComponent  },
    { path: 'dashboard', component:DashboardComponent, canActivate:[ authGuard ] },
    { path: 'servicios/public', component:serviciosPublicComponent },
    { path: 'dashboard/servicios/edit/:id',component:ServicioEditComponent, canActivate:[ authGuard ]  },
    { path: 'dashboard/reservas',component: ReservasComponent, canActivate:[ authGuard ]  },
    { path: 'dashboard/users',component:UsersComponent, canActivate:[ authGuard ]  },
    { path: 'dashboard/user/new',component:UserNewComponent, canActivate:[ authGuard ]  },
    { path: 'dashboard/users/edit/:id', component: UserEditComponent, canActivate:[ authGuard ] },
    { path: 'dashboard/servicios',component:ServiciosComponent, canActivate:[ authGuard ]  },
    { path: 'dashboard/servicios/new', component:servicioNewFormcomponent, canActivate:[authGuard] },
    { path:'dashboard/destinos/new-form', component: destinosNewForm},
    { path: 'dashboard/reservas/new', component: ReservaNewComponent, canActivate:[ authGuard ] },
    { path: 'reserva', component: ReservaPublicaComponent, canActivate:[ authGuard ] },
    { path: 'dashboard/reservas/edit/:id', component: ReservaEditComponent, canActivate:[ authGuard ] },
    { path: '**', redirectTo: 'home' , pathMatch: 'full' },
    { path: '', redirectTo: 'home' , pathMatch: 'full' },
    { path:'destinos', component: DestinosPublicComponent},
    { path:'dashboard/destinos', component: DestinosComponent, canActivate:[ authGuard ]},
    { path:'dashboard/destinos/new-form', component:destinosNewForm, canActivate:[ authGuard ]},
    { path:'dashboard/destinos/edit/:id', component: DestinosEditComponent, canActivate:[ authGuard ]},
    { path:'dashboard/servicios',component:ServiciosComponent, canActivate:[ authGuard ]  },
    { path:'dashboard/servicios/new', component:servicioNewFormcomponent, canActivate:[authGuard] },

    { path:'**', redirectTo: 'home' , pathMatch: 'full' },  
    { path:'', redirectTo: 'home' , pathMatch: 'full' },

    // { path:'resenas/new-form', component: resenas, },
    // { path:'dashboard/resenas/new-form', component: Resena,  },  

];



    
    

