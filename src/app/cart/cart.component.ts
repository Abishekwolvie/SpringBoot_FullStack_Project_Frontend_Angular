<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartresources/cart.service';
import { Cart } from '../cartresources/cart';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
>>>>>>> master

@Component({
  selector: 'app-cart',
  standalone: true,
<<<<<<< HEAD
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
=======
  imports: [HttpClientModule,CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers:[CartService]
})
export class CartComponent implements OnInit{

  cartproducts:Cart[]=[];

  ngOnInit(): void {
    
    this.carserviceobj.getcartdetailsbyuserid(localStorage.getItem("useremail")).subscribe((value)=>{
      this.cartproducts = value;
      console.log(this.cartproducts);
    });

  }
  constructor(private carserviceobj:CartService){

  }

  deletefromcart(cart:Cart){
    this.carserviceobj.deletefromcart(cart).subscribe((value)=>{
      this.carserviceobj.getcartdetailsbyuserid(localStorage.getItem("useremail")).subscribe((cartval)=>{
        this.cartproducts = cartval;
      });
    });
  }

>>>>>>> master

}
