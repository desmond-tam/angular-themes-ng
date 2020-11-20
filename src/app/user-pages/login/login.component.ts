import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(fb:FormBuilder,
    private router: Router) {
    this.loginForm = fb.group({
      username : ['', Validators.required],
      password:['',Validators.required]
    });
   }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value.username);
    this.router.navigate(['/dashboard']);
  }

}
