import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

    signInForm!: FormGroup;
    isloading: boolean = false;
    error: boolean = false;

    constructor(private _fb:FormBuilder,private _authservice:AuthServiceService,private _Router:Router) {}


    ngOnInit(): void{
      window.scrollTo(0, 0)
      this.createSignInForm()
  }





  navigateToRegister() {
    this._Router.navigate(['/register'])
  }

  createSignInForm() {

      this.signInForm = this._fb.group({
        email:new FormControl('',[Validators.required, Validators.email]),
        password:new FormControl('',[Validators.required]),
      });
    }

  onsubmit() {
    const email = this.signInForm.get('email')?.value;
    const password = this.signInForm.get('password')?.value;
    this.isloading = true;


    this._authservice.signin(email, password).subscribe({
      next: (res) => {
        localStorage.setItem('currentUserUID',res.user.uid)
        setTimeout(() => {
            this.isloading = false;
            this._Router.navigate(['/'])
        },1000)
      },
      error: (err) => {
        console.log(err.code);

        setTimeout(() => {

            this.isloading = false;
            this.error=true
        },1000)
      }
    });

  }
}
