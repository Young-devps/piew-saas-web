import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  resetForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit () {
    const email = this.resetForm.get('email').value;

    this.authService.resetPassword(email);
  }

}
