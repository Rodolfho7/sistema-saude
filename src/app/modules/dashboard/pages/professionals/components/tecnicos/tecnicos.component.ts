import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlusComponent } from '../../../../components/icons/plus/plus.component';
import { NgClass, NgFor } from '@angular/common';
import { PersonComponent } from '../../../../components/icons/person/person.component';

@Component({
  selector: 'app-tecnicos',
  imports: [
    PlusComponent,
    ReactiveFormsModule,
    NgClass,
    PersonComponent,
    NgFor,
  ],
  templateUrl: './tecnicos.component.html',
  styleUrl: './tecnicos.component.scss',
})
export class TecnicosComponent implements OnInit {
  formNovoProfissional!: FormGroup;

  professionals = [
    {
      id: 0,
      nome: 'Alana Albuquerque',
      especialidade: 'Radiologia',
    },
    {
      id: 1,
      nome: 'Luana Gonçalves',
      especialidade: 'Laboratorio',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formNovoProfissional = this.fb.group({
      nome: [null, Validators.required],
      especialidade: [null, Validators.required],
    });
  }

  cadastrar() {
    const novoTecnico = this.formNovoProfissional.value;
    this.professionals.push({ ...novoTecnico, id: this.professionals.length });
  }
}
