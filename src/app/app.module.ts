import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { VegetableComponent } from './vegetables/vegetable/vegetable.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitComponent } from './fruits/fruit/fruit.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrdersComponent,
    CartComponent,
    VegetablesComponent,
    VegetableComponent,
    FruitsComponent,
    FruitComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
