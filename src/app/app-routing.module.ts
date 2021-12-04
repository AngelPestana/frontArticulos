import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AbarrotesComponent } from './pages/categorias/abarrotes/abarrotes.component';
import { EnlatadosComponent } from './pages/categorias/enlatados/enlatados.component';
import { LacteosComponent } from './pages/categorias/lacteos/lacteos.component';
import { BotanasComponent } from './pages/categorias/botanas/botanas.component';
import { BebidasComponent } from './pages/categorias/bebidas/bebidas.component';
import { HigieneComponent } from './pages/categorias/higiene/higiene.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'abarrotes',
    component: AbarrotesComponent
  },
  {
    path: 'enlatados',
    component: EnlatadosComponent
  },
  {
    path: 'lacteos',
    component: LacteosComponent
  },
  {
    path: 'botanas',
    component: BotanasComponent
  },
  {
    path: 'bebidas',
    component: BebidasComponent
  },
  {
    path: 'higiene',
    component: HigieneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
