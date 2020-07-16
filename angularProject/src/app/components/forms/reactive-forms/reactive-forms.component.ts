import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from 'src/app/validator/username.validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
})
export class ReactiveFormsComponent {
  formObj = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      UsernameValidators.noSpace,
    ]),

    pass: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  get uName() {
    return this.formObj.get('userName');
  }

  get upass() {
    return this.formObj.get('pass');
  }
}
