import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedMaterialModule } from '../shared/shared-material/shared-material/shared-material.module';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedMaterialModule,
    RouterModule
  ], 
  exports:[ NavBarComponent]
  
})
export class SharedComponentsModule { }
