import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // components
  registerForm: FormGroup;
  submitted = false;   
  parentMessage : any;
  displayView: boolean | undefined = undefined;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
  });
  }

  get f() { 
    return this.registerForm.controls; 
  }

  onSubmit(data: any) {
    this.parentMessage = data;
    this.submitted = true;
   

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.displayView = true;
  }

}
