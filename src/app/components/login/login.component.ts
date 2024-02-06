import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({});
  loading = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    this.createForm();

  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public login() {
    console.log(this.loginForm);
    const user = this.loginForm.value.user;
    const password = this.loginForm.value.password;
    console.log("usuario", user);
    console.log("contraseña", password);

    if (user == 'inma' && password == '12345') {
      this.fakeLoading();
    } else {
      this.error();
      this.loginForm.reset();
    }
  }


  public error() {
    this.snackBar.open('Usuario o contraseña ingresado son invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  public fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard'])

      this.loading = false;
    }, 1500);
  }

}
