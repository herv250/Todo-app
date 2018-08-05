import { Component, OnInit } from '@angular/core';
import { ValidatorFn, AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? {
      'passwordTooShort': {
        requiredLength: length, actualLength: control.value.length
      }
    } : null;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: FormGroup;
  public errorMsg: string;

  constructor(private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.user = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.login(this.user.value.username,
      this.user.value.password).subscribe(val => {
        if (val) {
          if (this.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
            this.authService.redirectUrl = undefined;
          } else {
            this.router.navigate(['/recipe/list']);
          }
        } else {
          this.errorMsg = `Could not login`;
        }
      }, (err: HttpErrorResponse) => {  //err => this.errorMsg = err.json().message);
        if (err.error instanceof Error) {
          this.errorMsg = `Error while trying to login user ${
            this.user.value.username
            }: $err.error.message}`;
        } else {
          this.errorMsg = `Error $(err.status} while trying to login user ${
            this.user.value.username
            }: $(err.error)`;
        }
      }
    );
  }
}


