import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  
  hide = true;

  getErrorMessage() {
    if (this.form.hasError('required')) {
      return 'You must enter a value';
    }
    return this.form.hasError('email') ? 'Not a valid email' : '';
  }


  constructor(
    private  authService: AuthService,
    private fb: FormBuilder
    ){
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
     }

  ngOnInit() {
  }

  login(){
    const user = { 
      email: this.form.value.email, 
      password: this.form.value.password
    };
    this.authService.login(user).subscribe(resp => { console.log(resp)});
  }

}
