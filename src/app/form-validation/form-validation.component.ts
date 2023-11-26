import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from 'src/custom-services/validation-service';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent {
  testForm: FormGroup;
  constructor(private fb:FormBuilder, private customValidationSvc: ValidationService){
    //Build the form
      this.testForm = this.fb.group({
          firstName : ['', Validators.required],
          lastName: ['', Validators.required],
          userName: ['', [Validators.required,Validators.minLength(6)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, this.customValidationSvc.validationMatchUPassword()]],
          cnpwd: ['', Validators.required],
          //For checkbox make it true
          terms: ['', Validators.requiredTrue]
      },
      {
        validators:  this.customValidationSvc.PasswordMatch('password', 'cnpwd')
      }
      )
  }

  submitForm():void{
    if(this.testForm.valid){
      alert("Form Submitted")
      this.testForm.reset()
    }
  }

  restForm(): void{
    this.testForm.reset()
  }

  get testFormControls():any{
    return this.testForm.controls;
  }
}
