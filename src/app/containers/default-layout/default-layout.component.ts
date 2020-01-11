import {Component } from '@angular/core';
import { navItems } from '../../_nav';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {

  isAuth: boolean;

  constructor(private authService: AuthService){}

  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  ngOnInit(){
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user){
          this.isAuth = true;
        }else{
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut(){
    this.authService.signOutUser();
  }
}
