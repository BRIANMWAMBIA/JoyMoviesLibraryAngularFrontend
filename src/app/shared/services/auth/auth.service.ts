import { ConstantService } from './../constant.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  
  constructor(
    private auth: AngularFireAuth,
    private snackbar: MatSnackBar,
    private router: Router,
    private consts: ConstantService
  ) {
    this.auth.authState.subscribe(user =>{
      if(user){
        this.userData = user;
        this.consts.set_user_prof(user);
       
      } else {
        this.consts.remove_user();
      }
    });
   }

   get isLogged(): boolean {
    let user: any;
    user = this.consts.get_user_prof();
    return ( JSON.stringify(user) !== "{}" ) ? true : false;
  } 

  signUpWithEmailAndPassword(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password).then(user => {
      console.log(user)
    }).catch(err => {
      console.log(err);
    })
  }
  signInWithEmailAndPassword(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password).then(user => {
      console.log(user)
      this.snackbar.open("Logged In", "success", { duration: 3000, panelClass: ['green-snackbar'] })
      this.router.navigate(['/home']);
    }).catch(err => {
      console.log(err);
      if (err.code === "auth/invalid-email" || err.code === "auth/wrong-password")
        this.snackbar.open("Check your credentials and try again", "failed", { duration: 5000, panelClass: ['green-snackbar'] })
    })
  }
  signInAnonymously() {
    this.auth.signInAnonymously().then(user => {
      this.snackbar.open("Logged In Anonymously", "success", { duration: 3000, panelClass: ['green-snackbar'] })
      this.router.navigate(['/home']);
    }).catch(err => {
      console.log(err);
    })
  }
  signOut(){
    this.auth.signOut().then(user=>{
      this.snackbar.open("Logged out", "logged out", {duration: 3000})
      this.router.navigate(['/auth'])
    }).catch(err=>{
      console.log(err)
    })
  }
}
