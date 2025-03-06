import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

   signUpForm!: FormGroup;
  isloading: boolean = false;
  emailExists: boolean = false;

  constructor(private _fb:FormBuilder,private _authservice:AuthServiceService,private _Router:Router) {}

  ngOnInit(): void{
    window.scrollTo(0,0)
  this.createSignUpForm()
}

  createSignUpForm() {

    this.signUpForm = this._fb.group({
      userName:new FormControl('',[Validators.required,Validators.minLength(4)]),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!\@#$%^&*_\-+=|\[\]{};:'"\?><,\/.?])/)]),
    });
  }

  onsubmit() {
    const userName = this.signUpForm.get('userName')?.value;
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;
    this.isloading = true;


    this._authservice.signup(email, password).subscribe({
      next: (res) => {
        localStorage.setItem('currentUserUID',res.user.uid)
        this._authservice.updateName(res.user, userName).subscribe({
          next: (res) => {
          setTimeout(() => {
            this.isloading = false;
            this._Router.navigate(['/'])
        },1000)
          },
          error: (res) => {
          }
        })
      },
      error: (err) => {
        setTimeout(() => {
          if (err.code == 'auth/email-already-in-use') {
            this.isloading = false;
            this.emailExists=true
          }
        },1000)
        console.log(err.code);
        // auth/email-already-in-use
      }
    });

  }
}
