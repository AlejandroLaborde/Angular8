import { RouterModule, Routes } from '@Angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioEditComponent } from './components/usuario/usuario-edit.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';

const APP_ROUTES: Routes = [

  { path: 'home', component: HomeComponent },
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [
      { path: 'nuevo', component: UsuarioNuevoComponent },
      { path: 'detalle', component: UsuarioDetalleComponent },
      { path: 'editar', component: UsuarioEditComponent }
    ]
  },
  { path: '**', pathMatch: 'full' , redirectTo: 'home' }
];


export const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
