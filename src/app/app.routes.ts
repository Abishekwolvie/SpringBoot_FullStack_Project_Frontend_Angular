import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
<<<<<<< HEAD
=======
import { CartComponent } from './cart/cart.component';
>>>>>>> master

export const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:"login",component:LoginComponent},
<<<<<<< HEAD
    {path:"products",component:ProductsComponent}
=======
    {path:"products",component:ProductsComponent},
    {path:"cart",component:CartComponent}
>>>>>>> master
];
