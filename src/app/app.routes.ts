import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:"login",component:LoginComponent},
    {path:"products",component:ProductsComponent},
    {path:"cart",component:CartComponent}
];
