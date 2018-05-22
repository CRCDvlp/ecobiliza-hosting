import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { AceptComponent } from './acept/acept.component';
import { RefuseComponent } from './refuse/refuse.component';
import { CancelComponent } from './cancel/cancel.component';

const appRoutes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'start', component: StartComponent},
    {path: 'acept', component: AceptComponent},
    {path: 'refuse', component: RefuseComponent},
    {path: 'cancel', component: CancelComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);