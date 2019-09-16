import { ModuleWithProviders} from '@angular/core'
import { Routes,RouterModule } from '@angular/router'

import {FormularioComponent} from './formulario/formulario.component'
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const appRoutes: Routes=[
{path:'', component: HomeComponent},
{path:'formulario', component: FormularioComponent}
]

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 