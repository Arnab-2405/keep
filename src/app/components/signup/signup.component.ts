import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm!:FormGroup;

  constructor(private formBuilder :FormBuilder, private http:HttpClient, private router :Router){}
  
  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      userName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  signup(){

    this.http.get<any>('http://localhost:3000/users').subscribe((res :any)=>{
      const userExists=res.find((a :any)=>{
        return a.email===this.signupForm.value.email
      });

      if(userExists){
        alert("User Already Exists");
        this.router.navigate(['login']);
      }
      else{
        this.http.post<any>('http://localhost:3000/users',this.signupForm.value).subscribe((result :any)=>{
       alert("Signup Successful");
       this.signupForm.reset();
       this.router.navigate(['login']);
     },
     (error :any)=>{
       console.log(error);
       alert("Oops! Something went wrong");
     });
      }
    });
  }
}
