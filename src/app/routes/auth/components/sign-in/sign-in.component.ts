import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
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
   private router: Router
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
    this.router.navigate(['/home']);
  })
}
}
