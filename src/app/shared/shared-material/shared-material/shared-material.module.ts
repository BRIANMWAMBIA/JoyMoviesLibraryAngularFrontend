import { NavBarComponent } from './../../components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { MatCardModule } from "@angular/material/card";
//import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { MatNativeDateModule } from '@angular/material/core';
//import { MatSelectModule } from '@angular/material/select';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
//import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
//import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";

//import { MatProgressBarModule } from '@angular/material/progress-bar';
//import { MatListModule } from '@angular/material/list';
//import { MatBottomSheetModule } from '@angular/material/bottom-sheet'; 
//import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
    
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
 
    MatInputModule,
    
    MatIconModule,
    MatRadioModule,

    
    
    MatSnackBarModule
  ]
})
export class SharedMaterialModule { }
