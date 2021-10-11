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

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  logout() {
    this.auth.signOut().then(res => {
      this.snackbar.open("Logged out", "logged out", {duration: 3000})
      this.router.navigate(['/auth'])
    });
  }
}

