import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './includes/menu/menu.component';
import { FooterComponent } from './includes/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarouselComponent } from './includes/carousel/carousel.component';
import { CardsComponent } from './includes/cards/cards.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AbarrotesComponent } from './pages/categorias/abarrotes/abarrotes.component';
import { EnlatadosComponent } from './pages/categorias/enlatados/enlatados.component';
import { LacteosComponent } from './pages/categorias/lacteos/lacteos.component';
import { BotanasComponent } from './pages/categorias/botanas/botanas.component';
import { BebidasComponent } from './pages/categorias/bebidas/bebidas.component';
import { HigieneComponent } from './pages/categorias/higiene/higiene.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    CarouselComponent,
    CardsComponent,
    ProductosComponent,
    AbarrotesComponent,
    EnlatadosComponent,
    LacteosComponent,
    BotanasComponent,
    BebidasComponent,
    HigieneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
