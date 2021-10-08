import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './routes/auth/components/sign-up/sign-up.component';
import { SignInComponent } from './routes/auth/components/sign-in/sign-in.component';

import { CoverComponent } from './routes/cover/cover.component';

const routes: Routes=[
  {  path: '', component: CoverComponent},

  // { path: '', component:  SignInComponent},
  {path: 'signin', component: SignInComponent},
  { path: 'signup', component: SignUpComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class AuthRoutingModule { }
