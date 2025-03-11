import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,signOut } from 'firebase/auth';
import { from, Observable } from 'rxjs';
import { auth } from '../../../firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

   signup(email:string,password:string):Observable<any>  {
   return from(createUserWithEmailAndPassword(auth, email, password));
  }
  updateName(user:any,name:string):Observable<any>  {
   return from(updateProfile(user, {displayName:name}));
  }

   signin(email:string,password:string):Observable<any>  {
   return from(signInWithEmailAndPassword(auth, email, password));
  }

  getCurrentUser()  {
    return auth.currentUser;
  }

  signOut():Observable<any>  {
  return from(signOut(auth));
  }

}
