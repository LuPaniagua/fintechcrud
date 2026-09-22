import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomesComponent } from './pages/homes/homes.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
    {
       path:'login', component:LoginComponent
    },
    {
        path:'home', component:HomesComponent
    },
    {
        path:'sobre',component:SobreComponent
    }
];