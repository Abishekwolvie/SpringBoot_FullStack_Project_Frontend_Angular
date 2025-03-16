import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpclient:HttpClient) { }

  private apiurl ="http://localhost:8080/products/addtocart";
  private getcartprodurl ="http://localhost:8080/cart/getcartdetails/";
  private deletefromcarturl =  "http://localhost:8080/cart/deleteproductfromcart"
  addtocart(cartobj:Cart){
    return this.httpclient.post(this.apiurl,cartobj);
  }

  getcartdetailsbyuserid(userid:string|null){

   return this.httpclient.get<Cart[]>(this.getcartprodurl+userid);
    
  }

  deletefromcart(cart:Cart){
    return this.httpclient.delete(this.deletefromcarturl,{body:cart});
  }
}
