import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private httpobj:HttpClient) { }

  authenticateuser(loginint:Login){

    return this.httpobj.post("http://localhost:8080/login",loginint);

  }
}
