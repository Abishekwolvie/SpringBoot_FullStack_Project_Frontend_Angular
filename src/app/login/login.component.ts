import { Component } from '@angular/core';
import { LoginserviceService } from '../loginresources/loginservice.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Login } from '../loginresources/login';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[LoginserviceService]
})
export class LoginComponent {

  constructor(private loginservice:LoginserviceService,private routerobj:Router){

  }

  loginint:Login={
    email:"",
    password:"",
  }

  loginUser(logindetails:NgForm){

    console.log(logindetails.value);

    this.loginint.email = logindetails.value.email;
    this.loginint.password = logindetails.value.password;
    //console.log(this.loginint);
    this.loginservice.authenticateuser(this.loginint).subscribe((value)=>{
      console.log(value);
      if(value==1){
        localStorage.setItem("useremail",this.loginint.email);
        this.routerobj.navigate(['/products']);
      }else {
        this.routerobj.navigate(['/login']);
      }
    })
 }

}
