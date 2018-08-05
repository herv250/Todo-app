import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl, ValidatorFn, FormBuilder, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? { 
      'passwordTooShort': {
         requiredLength: length, actualLength: control.value.length 
      } } : null;    
    };    
}

function comparePasswords(control: AbstractControl): { [key: string]:any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : { 
    'passwordsDiffer': true };
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: FormGroup;

get passwordControl(): FormControl {
  return <FormControl>this.user.get('passwordGroup').get('password');
}

  constructor(private fb: FormBuilder, private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)],
        this.serverSideValidateUsername()],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, passwordValidator(12)]],
        confirmPassword: ['', Validators.required]
      }, { validator: comparePasswords })
      })    
  }  

  serverSideValidateUsername(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this._authenticationService
        .checkUsernameAvailability(control.value)
        .pipe(
          map(available => {
            if(available){
              return null;
            }
            return { userAlreadyExists: true };
          })
        );
    }
  }

}
