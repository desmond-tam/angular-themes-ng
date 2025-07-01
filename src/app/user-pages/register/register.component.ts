import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Notifications } from  '../../utils/notification';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm;
  constructor(fb:FormBuilder) {
    this.signupForm = fb.group({
      username : ['', Validators.required],
      email:['',Validators.required],
      country:['',Validators.required],
      terms:[false,Validators.required]
    });
   }

  ngOnInit() {
  }

  register() {
    console.log(this.signupForm.value.username);
    console.log(this.signupForm.value.email);
    console.log(this.signupForm.value.country);
    console.log(this.signupForm.value.terms);
    Notifications.showErrorNotification(`user has been registered.`);
  }


}
