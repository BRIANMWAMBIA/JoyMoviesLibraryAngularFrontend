import { AuthService } from './../../shared/services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
islogged!: boolean;
  constructor(
    private auth: AuthService,
   
  ) {
    
   }

  ngOnInit(): void {
    this.islogged=this.auth.isLogged;
  }
  logout() {
    this.auth.signOut()
  }

}

