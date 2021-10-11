import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private snackbar: MatSnackBar,
    private auth: AngularFireAuth,
    private router: Router
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
