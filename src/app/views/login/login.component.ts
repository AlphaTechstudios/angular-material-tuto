import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports:[MatCardModule, MatInputModule, MatFormFieldModule, NgIf, FormsModule, ReactiveFormsModule, MatButtonModule, MatDividerModule]
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
  constructor(private formBuilder: FormBuilder){}
  
  get loginFormData() {
    
    return this.loginForm.controls;
  }
  
  ngOnInit(): void {
   this.loginForm =  this.formBuilder.group({
    email:['', [Validators.email, Validators.required]],
    password:['', [Validators.required, Validators.minLength(12)]]
   });
  }

}
