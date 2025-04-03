import { DatePipe, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlusComponent } from '../../../../components/icons/plus/plus.component';

@Component({
  selector: 'app-consultas',
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgFor,
    PlusComponent,
    NgClass,
    DatePipe,
  ],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css',
})
export class ConsultasComponent implements OnInit {
  formNovaConsulta!: FormGroup;

  consultas = [
    {
      id: 0,
      nomeMedico: 'Hart Hagerty',
      data: '10/06/2025',
      status: 'Consultado',
    },
    {
      id: 1,
      nomeMedico: 'Hart Hagerty',
      data: '10/06/2025',
      status: 'Consultado',
    },
    {
      id: 2,
      nomeMedico: 'Hart Hagerty',
      data: '10/06/2025',
      status: 'Consultado',
    },
    {
      id: 3,
      nomeMedico: 'Girosvaldo da Silva',
      data: '10/06/2025',
      status: 'A consultar',
    },
    {
      id: 4,
      nomeMedico: 'Ronaldinho Gaúcho',
      data: '10/06/2025',
      status: 'Cancelado',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formNovaConsulta = this.fb.group({
      nomeMedico: [null, Validators.required],
      data: [null, Validators.required],
      status: ['A consultar'],
    });
  }

  addConsulta() {
    const dadosConsulta = this.formNovaConsulta.value;
    console.log(dadosConsulta);
    this.consultas.push(dadosConsulta);
    this.formNovaConsulta.reset();
  }
}
