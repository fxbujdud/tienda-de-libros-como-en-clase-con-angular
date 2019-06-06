import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ProfileComponent, ListUsersComponent, LoginComponent],
  exports: [LoginComponent],
})
export class AuthModule { }