import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { PlusComponent } from '../../../../components/icones/plus/plus.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PersonComponent } from '../../../../components/icones/person/person.component';

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
      especialidade: 'Ortopedista',
      crm: 123123123,
    },
    {
      id: 1,
      nome: 'Dra. Larissa Colosso',
      especialidade: 'Geriatra',
      crm: 456456456,
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formNovoProfissional = this.fb.group({
      nome: [null, Validators.required],
      especialidade: [null, Validators.required],
      crm: [null, Validators.required],
    });
  }

  cadastrar() {
    const novoMedico = this.formNovoProfissional.value;
    this.professionals.push({ ...novoMedico, id: this.professionals.length });
  }
}
