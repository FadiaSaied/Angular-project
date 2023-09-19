import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      Name: new FormControl('', Validators.required),

      emailName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      ]),

      UserName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S+$/),
      ]),

      Password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
      ]),
    });
  }
  register() {
    console.log(this.registerForm);
  }
}
