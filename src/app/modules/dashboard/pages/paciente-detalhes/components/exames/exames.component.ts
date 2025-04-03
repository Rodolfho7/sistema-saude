import { DatePipe, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlusComponent } from '../../../../components/icones/plus/plus.component';

@Component({
  selector: 'app-exames',
  imports: [NgClass, DatePipe, NgFor, ReactiveFormsModule, PlusComponent],
  templateUrl: './exames.component.html',
  styleUrl: './exames.component.css',
})
export class ExamesComponent implements OnInit {
  formNovoExame!: FormGroup;
  exames = [
    {
      id: 0,
      laboratorio: 'clinica do sangue',
      tipoExame: 'Sangue',
      data: '12/11/25',
      status: 'Marcado',
    },
    {
      id: 1,
      laboratorio: 'clinica do sangue',
      tipoExame: 'Urina',
      data: '10/10/25',
      status: 'Feito',
    },
    {
      id: 2,
      laboratorio: 'clinica do sangue',
      tipoExame: 'Fezes',
      data: '10/10/25',
      status: 'Cancelado',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formNovoExame = this.fb.group({
      laboratorio: [null, Validators.required],
      tipoExame: [null, Validators.required],
      data: [null, Validators.required],
      status: ['A consultar'],
    });
  }

  addExame() {}
}
