import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  async login() {
    const username = 'fxbujdud@gmail.com';
    const password = '123asdZXC';
    const user = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}