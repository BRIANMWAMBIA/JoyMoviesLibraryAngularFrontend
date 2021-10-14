import { AuthService } from './../../../../shared/services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    public auth: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.registerForm = this.fb.group({
      id: ['', {}],
      firstName: ['', { validators: [Validators.required] }],
      lastName: ['', { validators: [Validators.required] }],
      dob: ['', { validators: [Validators.required] }],
      email: ['', { validators: [Validators.required, Validators.email], updateOn: "change" }],
      password: ['', { validators: [Validators.required] }]
    })
  }
  onSubmit(form: any) {
    this.auth.signUpWithEmailAndPassword(form.email, form.password)
  }

}
