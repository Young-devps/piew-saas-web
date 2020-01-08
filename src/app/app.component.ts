import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    var config = {
      apiKey: "AIzaSyCYh5KgeDZAkqAy2-_XtPjhQNv1A7GwHO4",
      authDomain: "agritech-85d86.firebaseapp.com",
      databaseURL: "https://agritech-85d86.firebaseio.com",
      projectId: "agritech-85d86",
      storageBucket: "agritech-85d86.appspot.com",
      messagingSenderId: "639376753018",
      appId: "1:639376753018:web:6deabc2926acf8273316c3",
      measurementId: "G-5MB01S2B4Z"
    };
    firebase.initializeApp(config);
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
