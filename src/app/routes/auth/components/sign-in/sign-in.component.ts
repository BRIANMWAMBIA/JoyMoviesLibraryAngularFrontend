import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, SelectControlValueAccessor } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
   private router: Router,
   private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      email: ['', {}],
      password: ['', {}]
    })
  }
signin(form: any){
  this.auth.signInWithEmailAndPassword(form.email,form.password).then(user=>{
    this.snackbar.open("Logged In", "success", { duration: 3000, panelClass: ['green-snackbar'] } )
    this.router.navigate(['/home']);
  }).catch(err => {
    if(err.code=== "auth/invalid-email" || err.code==="auth/wrong-password")
    this.snackbar.open("Check your credentials and try again", "failed",{duration: 5000, panelClass:['green-snackbar']})
  })
}
}
