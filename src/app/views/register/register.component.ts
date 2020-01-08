import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {error} from 'selenium-webdriver';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit{

  registerForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }
  onSubmit() {
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;
    this.authService.createNewUser(email, password).then(
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
