import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
islogged!:boolean;
  constructor(
    private snackbar: MatSnackBar,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.islogged=  this.auth.isLogged;
  }

  logout() {
    this.auth.signOut()
    
  }
}
