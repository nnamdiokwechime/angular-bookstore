import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FruitComponent } from './fruits/fruit/fruit.component';
import { FruitsComponent } from './fruits/fruits.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrdersComponent } from './orders/orders.component';
import { VegetableComponent } from './vegetables/vegetable/vegetable.component';
import { VegetablesComponent } from './vegetables/vegetables.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch:'full'},
  {path:'vegetables', component: VegetablesComponent, children:[
    {path:':vegetable', component: VegetableComponent}
  ]},
  {path:'fruits', component: FruitsComponent, children:[
    {path:':fruit', component: FruitComponent}
  ]},
  {path:'orders', component: OrdersComponent},
  {path:'cart', component: CartComponent},
  {path:'**', redirectTo:''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
