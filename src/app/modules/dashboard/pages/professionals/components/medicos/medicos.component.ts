import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { PlusComponent } from '../../../../components/icons/plus/plus.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PersonComponent } from '../../../../components/icons/person/person.component';

@Component({
  selector: 'app-medicos',
  imports: [
    PlusComponent,
    ReactiveFormsModule,
    NgClass,
    NgFor,
    PersonComponent,
  ],
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.scss',
})
export class MedicosComponent implements OnInit {
  formNovoProfissional!: FormGroup;

  professionals = [
    {
      id: 0,
      nome: 'Dr. Rafael Pereira',
      area: 'Ortopedista',
    },
    {
      id: 1,
      nome: 'Dra. Larissa Colosso',
      area: 'Geriatra',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formNovoProfissional = this.fb.group({
      nome: [null, Validators.required],
      area: [null, Validators.required],
    });
  }

  cadastrar() {}
}
