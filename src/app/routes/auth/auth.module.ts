import { SharedComponentsModule } from './../../shared-components/shared-components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './../../auth-routing.module';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material/shared-material/shared-material.module';
import { CoverComponent } from '../cover/cover.component';
import { FlexLayoutModule } from '@angular/flex-layout';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
  CoverComponent
  ],
  imports: [
    CommonModule,
AuthRoutingModule,
    SharedMaterialModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [SignUpComponent,
    SignInComponent,
    CoverComponent]
})
export class AuthModule { }
