import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../productresources/products.service';
import { Products } from '../productresources/products';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cart } from '../cartresources/cart';
import { CartService } from '../cartresources/cart.service';
import { Brands } from '../productresources/brands';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterLink,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers:[ProductsService,CartService]
})
export class ProductsComponent implements OnInit{

  productsarray:Products[]=[];
  private cartproduct:Cart = {
    brand:"",
    graphicscard:"",
    model:"",
    os:"",
    price:0,
    processor:"",
    storage:0,
    userid:""
  }

  laptopbrands:Brands[]=[];

  selectedbrand:string='';

  constructor(private productserviceobj:ProductsService, private cartserviceobj:CartService){}
  ngOnInit(): void {
    this.productserviceobj.getallproducts().subscribe((value)=>{
      this.productsarray=value;
      //console.log(value);
    });

    this.productserviceobj.getbrands().subscribe((value)=>{
      this.laptopbrands = value;
      //console.log(this.laptopbrands);
    });
    
  }

  addproductstocart(id:number){

    //getting products using product id
    this.productserviceobj.getproductsbyid(id).subscribe((value)=>{
      //console.log(value);
      //console.log(localStorage.getItem("useremail"));
      this.cartproduct.storage=value.storage;
      this.cartproduct.processor = value.processor;
      this.cartproduct.os = value.os;
      this.cartproduct.brand = value.brand;
      this.cartproduct.model = value.model;
      this.cartproduct.graphicscard = value.graphicscard;
      this.cartproduct.userid = localStorage.getItem("useremail");
      this.cartproduct.price = value.price;
      //console.log(this.cartproduct);

      //add products to cart
      this.cartserviceobj.addtocart(this.cartproduct).subscribe((value)=>{

      });

      

    });

  }

  //filter products by brands
  filterbybrands(){
    //console.log(this.selectedbrand);
    if(this.selectedbrand==""){
      this.productserviceobj.getallproducts().subscribe((value)=>{
        this.productsarray = value;
      })
    } else {
      this.productserviceobj.getProductsByBrand(this.selectedbrand).subscribe((value)=>{
        this.productsarray = value;
      })
    }

  }

}
