import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './products';
import { Brands } from './brands';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient:HttpClient) { }

  private apiurlgetproduct:string="http://localhost:8080/products";
  private apiurlgetbrands:string = "http://localhost:8080/products/brands";

  getallproducts(){
    return this.httpclient.get<Products[]>(this.apiurlgetproduct);
  }

  getproductsbyid(id:number){
    return this.httpclient.get<Products>(this.apiurlgetproduct+"/"+id);
  }

  getbrands(){
    return this.httpclient.get<Brands[]>(this.apiurlgetbrands);
  }

  getProductsByBrand(brandname:string){

    return this.httpclient.get<Products[]>(this.apiurlgetbrands+"/"+brandname);

  }
}
