import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { ReservasComponent } from './pages/private/reservas/reservas.component';
import { destinosNewForm } from './pages/private/destinos/new-form/new-form.component';
import { DestinosComponent } from './pages/private/destinos/destinos.component';
import { ServiciosComponent } from './pages/private/servicios/servicios.component';
import { servicioNewFormcomponent } from './pages/private/servicios/new-form/new-form.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { resenas } from './pages/public/resenas/new-form/new-form.component';
import { ReservaNewComponent } from './pages/private/reservas/reserva-new/reserva-new.component';
import { DestinosEditComponent } from './pages/private/destinos/destinos-edit/destinos-edit.component';
import { DestinosPublicComponent } from './pages/public/destinos-public/destinos-public.component';



export const routes: Routes = [
    { path:'home', component: HomeComponent},
    { path:'login', component: LoginComponent  },
    { path:'register', component: RegisterComponent  },
    { path:'destinos', component: DestinosPublicComponent},
    { path:'reservas', component: ReservasComponent  },
    { path:'dashboard', component:DashboardComponent, canActivate:[ authGuard ] },
    { path:'resenas/new-form', component: resenas},
    { path:'dashboard/destinos', component: DestinosComponent, canActivate:[ authGuard ]},
    { path:'dashboard/destinos/new-form', component:destinosNewForm, canActivate:[ authGuard ]},
    { path:'dashboard/destinos/edit/:id', component: DestinosEditComponent, canActivate:[ authGuard ]},
    { path:'dashboard/servicios',component:ServiciosComponent, canActivate:[ authGuard ]  },
    { path:'dashboard/servicios/new', component:servicioNewFormcomponent, canActivate:[authGuard] },
    { path:'dashboard/reservas/new', component: ReservaNewComponent, canActivate:[ authGuard ] },
    { path:'**', redirectTo: 'home' , pathMatch: 'full' },  
    { path:'', redirectTo: 'home' , pathMatch: 'full' },
];
