import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { HomeComponent } from './home/home.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'product/:id' , component:ProductDetailsComponent},
  {path:"newProducts",component:NewProductsComponent},
  {path:"Discount",component:DiscountsComponent},
  {path:"cart",component:CartComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"contact",component:ContactComponent},

  {path:"**",component:HomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
