import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'newoder/:kofieId', loadChildren: './newoder/newoder.module#NewoderPageModule' },
  { path: 'placeorder', loadChildren: './placeorder/placeorder.module#PlaceorderPageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
