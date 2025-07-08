import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { ReservasComponent } from './pages/private/reservas/reservas.component';
import { destinosNewForm } from './pages/private/destinos/new-form/new-form.component';
import { ContactosComponent } from './pages/public/contactos/contactos.component';
import { DestinosComponent } from './pages/public/destinos/destinos.component';
import { resenasNewForm } from './pages/private/resenas/new-form/new-form.component';
import { NosotrosComponent } from './pages/public/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/private/servicios/servicios.component';
import { servicioNewFormcomponent } from './pages/private/servicios/new-form/new-form.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
    { path:'home', component: HomeComponent},
    { path:'login', component: LoginComponent  },
    { path:'register', component: RegisterComponent  },
    { path:'contactos', component: ContactosComponent},
    { path:'destinos', component: DestinosComponent},
    { path:'nosotros', component: NosotrosComponent},
    { path:'reservas', component: ReservasComponent  },
    { path:'dashboard', component:DashboardComponent, canActivate:[ authGuard ] },
    { path:'dashboard/destinos/new-form', component:destinosNewForm},
    { path:'dashboard/resenas/new-form', component: resenasNewForm},
    { path:'dashboard/servicios',component:ServiciosComponent, canActivate:[ authGuard ]  },
    { path:'dashboard/servicios/new', component:servicioNewFormcomponent, canActivate:[authGuard] },
    { path:'**', redirectTo: 'home' , pathMatch: 'full' },
    { path:'', redirectTo: 'home' , pathMatch: 'full' },
];
