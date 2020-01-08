import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {error} from 'selenium-webdriver';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }
  onSubmit() {
    const email = this.logInForm.get('email').value;
    const password = this.logInForm.get('password').value;
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/dashboard']);
      },
      // tslint:disable-next-line:no-shadowed-variable
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  onSubmitWhitGoogle() {
    this.authService.signInUserWithGmail().then(
      () => {
        this.router.navigate(['/dashboard']);
      },
      // tslint:disable-next-line:no-shadowed-variable
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
