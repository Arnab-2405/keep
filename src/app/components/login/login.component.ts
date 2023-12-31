import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginForm! :FormGroup;

  constructor(private formBuilder :FormBuilder,
    private http:HttpClient,
    private router :Router
    ){
  }

  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      email :['',Validators.required],
      password :['',Validators.required]
    })
  }

  login(){
    this.http.get('http://localhost:3000/users').subscribe((res:any)=>{
      const user =res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password;
      });

      if(user){
        alert("Login Successful");
        this.loginForm.reset();
        this.router.navigate(['notes']);
      }
      else{
        alert("User not found");
      }
    },(err :any)=>{
      alert("Oops! Something went wrong");
    })
  }

}
