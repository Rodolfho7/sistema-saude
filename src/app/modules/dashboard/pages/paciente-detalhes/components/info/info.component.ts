import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-info',
  imports: [ReactiveFormsModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, Validators.required],
      peso: [null, Validators.required],
      altura: [null, Validators.required],
      endereco: [null],
      profissao: [null],
    });
  }

  update() {}
}
