import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { ReservasComponent } from './pages/private/reservas/reservas.component';
import { ServiciosComponent } from './pages/private/servicios/servicios.component';
import { Component } from '@angular/core';
import { servicioNewFormcomponent } from './pages/private/servicios/new-form/new-form.component';


export const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'login', component: LoginComponent  },
    { path:'register', component: RegisterComponent  },
    { path:'reservas', component: ReservasComponent  },
    {path: 'dashboard/servicios',component:ServiciosComponent},
    {path: 'dashboard/servicios/new', component:servicioNewFormcomponent},
    { path: '**', redirectTo: 'home' , pathMatch: 'full' },
    { path: '', redirectTo: 'home' , pathMatch: 'full' },
];
