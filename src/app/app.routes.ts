import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistroComponent } from './views/registro/registro.component';

const APP_ROUTES: Routes = [

    {path: '', component: RegistroComponent},
    {path: 'registro', component: RegistroComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'registro'}

]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);