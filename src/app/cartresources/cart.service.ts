import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpclient:HttpClient) { }

  private apiurl ="http://localhost:8080/products/addtocart";
  private getcartprodurl ="cart/getcartdetails/";
  addtocart(cartobj:Cart){
    return this.httpclient.post(this.apiurl,cartobj);
  }

  getcartdetailsbyuserid(){
    
  }
}
