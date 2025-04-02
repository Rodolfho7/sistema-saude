import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required],
    });
  }

  login() {
    const { usuario, senha } = this.form.value;
    if (usuario == 'admin') {
      localStorage.setItem('user-token', 'token-admin');
    } else {
      localStorage.setItem('user-token', 'token-usuario');
    }
    this.router.navigate(['/']);
  }
}
