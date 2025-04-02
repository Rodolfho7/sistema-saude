import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

const ELEMENT_DATA: any[] = [
  {
    id: 1,
    titulo: 'otorrino',
    medico: 'Dr. Romulo',
    data: '02/01/2025',
    status: 'agendado',
  },
  {
    id: 1,
    titulo: 'dermatologista',
    medico: 'Dra. Rafaela',
    data: '20/01/2025',
    status: 'consultado',
  },
  {
    id: 1,
    titulo: 'dermatologista',
    medico: 'Dra. Rafaela',
    data: '20/01/2025',
    status: 'atrasado',
  },
  {
    id: 1,
    titulo: 'dermatologista',
    medico: 'Dra. Rafaela',
    data: '20/01/2025',
    status: 'agendado',
  },
  {
    id: 1,
    titulo: 'dermatologista',
    medico: 'Dra. Rafaela',
    data: '20/01/2025',
    status: 'agendado',
  },
  {
    id: 1,
    titulo: 'dermatologista',
    medico: 'Dra. Rafaela',
    data: '20/01/2025',
    status: 'agendado',
  },
  {
    id: 1,
    titulo: 'dermatologista',
    medico: 'Dra. Rafaela',
    data: '20/01/2025',
    status: 'agendado',
  },
];

@Component({
  selector: 'app-consultation',
  imports: [NgClass, ReactiveFormsModule, NgFor],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css',
})
export class ConsultationComponent implements OnInit {
  formNovaConsulta!: FormGroup;

  patients = [
    {
      id: 0,
      nome: 'Hart Hagerty',
      pais: 'Brasil',
      profissao: 'Eletricista',
      planoSaude: 'UNIMED',
    },
    {
      id: 1,
      nome: 'Girosvaldo da Silva',
      pais: 'Brasil',
      profissao: 'Pedreiro',
      planoSaude: '--',
    },
    {
      id: 2,
      nome: 'Ronaldinho Gaúcho',
      pais: 'Brasil',
      profissao: 'Oni-presente',
      planoSaude: '--',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formNovaConsulta = this.fb.group({
      nome: [null, Validators.required],
      pais: [null, Validators.required],
      profissao: [null, Validators.required],
      planoSaude: [null, Validators.required],
    });
  }
  addConsulta() {}
}
